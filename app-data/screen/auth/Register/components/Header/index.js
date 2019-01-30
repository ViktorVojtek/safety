import React from 'react';
import {
  StatusBar,
  Text,
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
      <View style={styles.partContainer}>
        <Text style={styles.registerText}>Registrácia</Text>
      </View>
      <View style={styles.partContainer} />
    </View>
  );
};

export default Header;
