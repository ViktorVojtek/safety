
import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { styles as stylesConfig } from '../../../../shared/config';

const { colors: { lightBlue } } = stylesConfig;

/*
address={item.address}
categoryId={item.categoryId}
date={item.dateCreated}
description={item.description}
subCategoryId={item.subCategoryId}
imageURI={item.image.data}
gpsCoords={item.gpsCoords}
*/

const ReportMarker = ({
  address, categoryId, coordinate, date, description, imageURI, navigation, subCategoryId,
}) => (
  <Marker
    coordinate={coordinate}
    onPress={() => {
      navigation.navigate('ReportDetail', {
        address,
        categoryId,
        date,
        description,
        imageURI,
        subCategoryId,
      });
    }}
  >
    <Icon color={lightBlue} name="map-marker" size={30} />
  </Marker>
);

ReportMarker.defaultProps = {
  description: '',
};

ReportMarker.propTypes = {
  address: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string,
  imageURI: PropTypes.string.isRequired,
  subCategoryId: PropTypes.string.isRequired,
};

export default ReportMarker;
