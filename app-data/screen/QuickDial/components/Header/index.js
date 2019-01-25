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
import styles from './styles';

const Header = (props) => {
  const {navigation, title} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <TouchableOpacity onPress={() => {
        navigation.goBack(null);
      }}>
        <Icon color={'#4a4a4a'} name={'chevron-left'} size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => _signOutAsync(navigation)}>
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
