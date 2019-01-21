import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import styles from './styles';

const Header = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.text}>Prihlásenie</Text>
    </View>
  );
};

export default Header;
