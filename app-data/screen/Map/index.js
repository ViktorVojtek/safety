import React from 'react';
import {
  // ActivityIndicator,
  // Dimensions,
  // FlatList,
  // Text,
  // TouchableOpacity,
  View,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import MapView from 'react-native-maps';
// import { compose, graphql } from 'react-apollo';
// import PropTypes from 'prop-types';
// import DeviceMarker from './components/DeviceMarker';
// import FlatListItem from './components/FlatListItem';
import ReportListComponent from './components/ReportListComponent';
import Header from '../../shared/components/Header';
// import ReportMarker from './components/ReportMarker';
import MapComponent from './components/MapComponent';
// import { setGpsDeviceMutation } from '../../graphql/mutations';
// import { /* getGpsDeviceQuery, */ getReportsQuery } from '../../graphql/queries';
// import { gpsLocation } from '../../shared/lib';
import { strings } from '../../shared/config';
import styles from './styles';

/* const handleGps = async (mutate) => {
  try {
    console.log('handle gps');
    const gpsCoords = await gpsLocation();
    console.log('New gps');
    console.log(gpsCoords);
    await mutate({ variables: { gpsCoords } });
  } catch (err) {
    console.log(err);
  }
};

const handleMarkerRegion = async ({ latitude, longitude }, mutate) => {
  try {
    const gpsCoords = { latitude, longitude };

    await mutate({ variables: { gpsCoords } });
  } catch (err) {
    console.log(err);
  }
}; */

const Map = () => (
  <View style={styles.container}>
    <MapComponent />
    <ReportListComponent />
  </View>
);

Map.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { map } } } = strings;

    return <Header navigation={navigation} title={map} />;
  },
};

export default Map;

/*
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
*/
