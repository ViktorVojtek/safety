import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import IconMenu from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = ({ navigation, title }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        navigation.goBack(null);
      }}
    >
      <Icon color="#4a4a4a" name="chevron-left" size={30} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
      onPress={() => {
        if (typeof navigation.openDrawer === 'function') {
          navigation.openDrawer();
        }
      }}
    >
      <IconMenu color="#4a4a4a" name="ios-menu" size={30} />
    </TouchableOpacity>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
