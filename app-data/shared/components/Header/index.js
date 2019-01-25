import React from 'react';
import {
  AsyncStorage,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const Header = (props) => {
  const {navigation, title} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <TouchableOpacity onPress={() => {
        navigation.navigate({ routeName: 'QuickDial' });
      }}>
        <PhoneIcon color={'#4a4a4a'} name={'phone'} size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {
        if (typeof navigation.openDrawer === 'function') {
          navigation.openDrawer();
        }
      }}>
        <Icon color={'#4a4a4a'} name={'menu'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const _signOutAsync = async (navigation) => {
  await AsyncStorage.clear();
  navigation.navigate('Auth');
};

export default Header;
