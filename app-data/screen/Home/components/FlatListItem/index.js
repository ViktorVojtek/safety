import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import CategoryTitle from '../CategoryTitle';
import SubCategoryTitle from '../SubCategoryTitle';
import styles from './styles';
import { apis } from '../../../../shared/config';

const { serverURI } = apis;

const FlatListItem = ({
  address, categoryId, description, /* gpsCoords, */ imageURI, navigation, subCategoryId,
}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('ReportDetail', {
        address,
        categoryId,
        description,
        imageURI,
        subCategoryId,
      });
    }}
  >
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: `${serverURI}/${imageURI}` /* 'https://www.w3schools.com/w3css/img_lights.jpg' */ }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.containerHalf}>
        <CategoryTitle categoryId={categoryId} />
        <SubCategoryTitle subCategoryId={subCategoryId} />
        <Text style={styles.textDescription}>{description}</Text>
        <Text style={styles.textDescription}>{address}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

FlatListItem.defaultProps = {
  description: '',
};

FlatListItem.propTypes = {
  address: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  description: PropTypes.string,
  /* gpsCoords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired, */
  imageURI: PropTypes.string.isRequired,
  subCategoryId: PropTypes.string.isRequired,
};

export default FlatListItem;
