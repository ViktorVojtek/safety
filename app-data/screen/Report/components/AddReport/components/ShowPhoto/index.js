import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const ShowPhoto = ({ photoHandler, uri }) => (
  <View style={styles.cameraImageContainer}>
    <TouchableOpacity onPress={() => photoHandler()} style={styles.cameraImageClose}>
      <Icon color="#fff" name="close" size={25} />
    </TouchableOpacity>
    <Image source={{ uri }} style={styles.cameraImage} />
  </View>
);

ShowPhoto.propTypes = {
  photoHandler: PropTypes.func.isRequired,
  uri: PropTypes.string.isRequired,
};

export default ShowPhoto;
