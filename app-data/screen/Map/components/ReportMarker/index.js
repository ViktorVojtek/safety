
import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { styles as stylesConfig } from '../../../../shared/config';

const { colors: { lightBlue } } = stylesConfig;

const ReportMarker = ({ coordinate }) => (
  <Marker coordinate={coordinate}>
    <Icon color={lightBlue} name="map-marker" size={30} />
  </Marker>
);

ReportMarker.propTypes = {
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReportMarker;
