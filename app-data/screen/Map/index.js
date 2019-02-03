import React from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { compose, graphql } from 'react-apollo';
import DeviceMarker from './components/DeviceMarker';
import Header from '../../shared/components/Header';
import { setGpsMutation } from '../../graphql/mutations';
import { getGpsQuery } from '../../graphql/queries';
import { gpsLocation } from '../../shared/lib';
import { strings } from '../../shared/config';
import styles from './styles';

const handleGps = async (mutate) => {
  try {
    const gpsCoords = await gpsLocation();

    await mutate({ variables: { gpsCoords } });
  } catch (err) {
    console.log(err);
  }
};

const Map = compose(
  graphql(setGpsMutation),
  graphql(getGpsQuery),
)((props) => {
  const {
    data: {
      error, loading, gps,
    }, mutate,
  } = props;

  handleGps(mutate);

  if (error) {
    return (<View><Text>{error.message}</Text></View>);
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { latitude, longitude } = gps;

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
        <DeviceMarker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
});

Map.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { map } } } = strings;

    return <Header navigation={navigation} title={map} />;
  },
};

export default Map;
