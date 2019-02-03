
import React from 'react';
import { Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import styles from './styles';

const ReportMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate}>
    <View style={styles.marker}>
      <Text style={styles.text}>1</Text>
    </View>
  </Marker>
);

ReportMarker.propTypes = {
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportMarker;
