import React from 'react';
import {
  ActivityIndicator,
  Text,
  View
} from 'react-native';
import styles from './styles';
import Header from '../../shared/components/Header';
import MapView, {Marker} from 'react-native-maps';
import {compose, graphql} from 'react-apollo';
import setGPSCoords from './graphql/setGPSCoords.mutation';
import gpsQuery from './graphql/gps.query';

const Map = compose(
  graphql(setGPSCoords),
  graphql(gpsQuery),
  )((props) => {
  const {data: {error, loading, gps}, mutate} = props;

  navigator.geolocation.getCurrentPosition((position) => {
    const {coords: {latitude, longitude}} = position;
    
    mutate({variables: {longitude, latitude}});
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
        <Marker
          coordinate={{latitude, longitude}}
        />
      </MapView>
    </View>
  );
});

Map.navigationOptions = {
  header: ({navigation}) => <Header navigation={navigation} />,
};

export default Map;
