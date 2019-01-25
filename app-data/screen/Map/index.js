import React from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import { strings } from '../../shared/config';
import DeviceMarker from './components/DeviceMarker';
import Header from '../../shared/components/Header';
import MapView from 'react-native-maps';
import {compose, graphql} from 'react-apollo';
import setGPSCoords from './graphql/setGPSCoords.mutation';
import getGps from './graphql/getGps.query';
import styles from './styles';

const Map = compose(
  graphql(setGPSCoords),
  graphql(getGps),
)((props) => {
  const {data: {error, loading, gps}, mutate} = props;

  navigator.geolocation.getCurrentPosition(async (position) => {
    try {
      const {coords: {latitude, longitude}} = position;
      const gpsCoords = {latitude, longitude};

      await mutate({variables: {gpsCoords}});
    } catch (err) {
      console.log(err);
    }
  }, (error) => {
    console.log(error.message);
  }, {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});

  if (error) {
    return (<View><Text>{error.message}</Text></View>);
  }
  if (loading) {
    return <ActivityIndicator />
  }

  const {latitude, longitude} = gps;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <DeviceMarker coordinate={{latitude, longitude}} />
      </MapView>
    </View>
  );
});

Map.navigationOptions = {
  header: ({navigation}) => {
    const { header: { title: {map} } } = strings;

    return <Header navigation={navigation} title={map} />;
  }
};

export default Map;
