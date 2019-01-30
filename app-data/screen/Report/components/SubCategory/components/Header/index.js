import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMenu from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Header = (props) => {
  const { navigation, title } = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <TouchableOpacity onPress={() => {
        navigation.goBack(null);
      }}
      >
        <Icon color="#4a4a4a" name="chevron-left" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {
        if (typeof navigation.openDrawer === 'function') {
          navigation.openDrawer();
        }
      }}
      >
        <IconMenu color="#4a4a4a" name="ios-menu" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
