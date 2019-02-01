import { apis } from '../config';

export const gpsLocation = () => new Promise(
  (resolve, reject) => (
    navigator.geolocation.getCurrentPosition((position) => {
      const {
        coords: {
          latitude, longitude,
        },
      } = position;
      const gpsCoords = { latitude, longitude };

      resolve(gpsCoords);
    }, (gpsError) => {
      reject(gpsError.message);
    }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
  ),
);

export const geocode = async (gpsCoords) => {
  return new Promise(async (resolve, reject) => {
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
  });
};
