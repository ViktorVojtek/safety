import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
import { compose, graphql } from 'react-apollo';
// import PropTypes from 'prop-types';
import DeviceMarker from './components/DeviceMarker';
import FlatListItem from './components/FlatListItem';
import Header from '../../shared/components/Header';
import ReportMarker from './components/ReportMarker';
import { setGpsMutation } from '../../graphql/mutations';
import { getGpsQuery, getReportsQuery } from '../../graphql/queries';
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

const handleMarkerRegion = async (gpsCoords, mutate) => {
  console.log(gpsCoords);
};

const Map = compose(
  graphql(setGpsMutation),
  graphql(getGpsQuery, {
    props: ({ data: { gps } }) => ({ gps }),
  }),
  graphql(getReportsQuery),
)(({
  data: {
    error, loading, reports,
  },
  gps, mutate, navigation,
}) => {
  handleGps(mutate);

  if (error) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Text>{error.message}</Text>
      </View>
    );
  }
  if (loading) {
    return <ActivityIndicator style={[styles.container, { justifyContent: 'center' }]} />;
  }

  // const reportMarkersGps = reports.map(item => ({ id: item.id, gpsCoords: item.gpsCoords }));
  const { height, width } = Dimensions.get('screen');
  const latitudeDelta = 0.0025;
  const ASPECT_RATIO = (width / height) * 0.5;
  const longitudeDelta = ASPECT_RATIO * latitudeDelta;
  const { latitude, longitude } = gps;

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
        >
          <DeviceMarker coordinate={{ latitude, longitude }} />
          {
            reports.map(item => ( // TODO Implement Map clusters
              <ReportMarker coordinate={item.gpsCoords} key={item.id} />
            ))
          }
        </MapView>
      </View>
      <View style={styles.halfContainer}>
        <FlatList
          data={reports}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <FlatListItem
              address={item.address}
              categoryId={item.categoryId}
              description={item.description}
              gpsCoords={item.gpsCoords}
              handler={handleMarkerRegion}
              imageURI={item.image.data}
              mutate={mutate}
              navigation={navigation}
              subCategoryId={item.subCategoryId}
            />
          )}
        />
      </View>
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
