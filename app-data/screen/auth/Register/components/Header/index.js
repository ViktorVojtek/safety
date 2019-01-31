import React from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.partContainer}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name="chevron-left" color="#fff" size={25} style={styles.chevronLeft} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
