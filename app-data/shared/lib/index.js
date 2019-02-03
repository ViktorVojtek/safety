import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { apis } from '../config';

const getCurrentPosition = () => (new Promise((resolve, reject) => (
  Geolocation.getCurrentPosition(
    (position) => {
      const {
        coords: {
          latitude, longitude,
        },
      } = position;
      const gpsCoords = { latitude, longitude };

      resolve(gpsCoords);
    },
    (error) => {
      reject(error);
    }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  )
)));

export const gpsLocation = () => (
  new Promise(async (result, reject) => {
    try {
      let position;

      if (Platform.OS === 'ios') {
        position = await getCurrentPosition();

        result(position);
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: 'App',
            message: 'are you sure you want to share your location with the app ?',
          },
        );

        console.log(granted);

        if (granted === 'granted') {
          console.log('going to call get current position');
          position = await getCurrentPosition();

          result(position);
        }
      }
    } catch (err) {
      reject(err);
    }
  })
);

export const geocode = async gpsCoords => (
  new Promise(async (resolve, reject) => {
    try {
      const { googleApiKey } = apis;
      const { latitude, longitude } = gpsCoords;
      const addressResult = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=${googleApiKey}`);

      const res = await addressResult.json();
      const address = res.results[0].formatted_address;

      resolve(address);
    } catch (err) {
      reject(err);
    }
  })
);

export const sortDateDescending = array => (
  array.sort((a, b) => (
    parseInt(b.dateCreated, 10) - parseInt(a.dateCreated, 10)
  )));
