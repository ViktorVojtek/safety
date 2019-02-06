import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import styles from './styles';

const DeviceMarker = (props) => {
  const { coordinate } = props; // TODO Set propTypes

  return (
    <Marker
      {...props}
      coordinate={coordinate}
    >
      <View style={styles.markerContainer}>
        <View style={styles.marker} />
      </View>
    </Marker>
  );
};

DeviceMarker.propTypes = {
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default DeviceMarker;
