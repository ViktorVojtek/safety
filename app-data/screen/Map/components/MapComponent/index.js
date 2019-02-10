import React from 'react';
import {
  ActivityIndicator, Text, TouchableOpacity, View,
} from 'react-native';
import { graphql } from 'react-apollo';
import MapView from 'react-native-map-clustering';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import ReportMarker from '../ReportMarker';
// import { setGpsDeviceMutation } from '../../../../graphql/mutations';
import { /* getGpsDeviceQuery, getGpsReportMarkerQuery, */ getReportsQuery } from '../../../../graphql/queries';
import { styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey } } = stylesConfig;

const MapComponent = ({
  data: {
    error, loading, reports,
  },
  handleFindMe,
  /* gpsDevice, gpsDeviceReset, gpsReportMarker, mutate, */
  handleMapInit, initialRegion,
  onMapReady, onRegionChange, onRegionChangeComplete, region,
}) => {
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

  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={initialRegion}
        loadingEnabled
        onMapReady={onMapReady}
        ref={(map) => { handleMapInit(map); }}
        onRegionChange={onRegionChange}
        onRegionChangeComplete={onRegionChangeComplete}
        region={region}
        showsBuildings={false}
        showsIndoors={false}
        showsMyLocationButton
        showsUserLocation
        showsTraffic={false}
        style={styles.map}
      >
        {
          reports.map(item => <ReportMarker coordinate={item.gpsCoords} key={item.id} />)
        }
      </MapView>
      <TouchableOpacity
        onPress={handleFindMe}
        style={styles.resetToDevicePosition}
      >
        <Icon name="gps-fixed" color={darkGrey} size={20} />
      </TouchableOpacity>
    </View>
  );
};

MapComponent.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    reports: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  }).isRequired,
  /* gpsDevice: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  // gpsDeviceReset: PropTypes.bool.isRequired,
  gpsReportMarker: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired, */
  handleFindMe: PropTypes.func.isRequired,
  handleMapInit: PropTypes.func.isRequired,
  initialRegion: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
  onMapReady: PropTypes.func.isRequired,
  onRegionChange: PropTypes.func.isRequired,
  onRegionChangeComplete: PropTypes.func.isRequired,
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }).isRequired,
};

export default graphql(getReportsQuery)(MapComponent);