import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const AddPhoto = ({ photoHandler }) => (
  <TouchableOpacity
    onPress={photoHandler}
    style={styles.choosePhotoButton}
  >
    <View style={styles.choosePhotoIconContainer}>
      <Icon name="image" color="#fff" size={35} />
    </View>
    <Text style={styles.choosePhotoText}>Pridaj fotografiu</Text>
  </TouchableOpacity>
);

AddPhoto.propTypes = {
  photoHandler: PropTypes.func.isRequired,
};

export default AddPhoto;
