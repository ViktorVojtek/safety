import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMenu from 'react-native-vector-icons/Ionicons';
// import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ navigation, title }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('QuickDial')}>
      <Icon color="#4a4a4a" name="phone" size={20} />
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
