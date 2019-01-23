import React from 'react';
import {
  AsyncStorage,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Icon name={'chevron-left'} color={'#fff'} size={25} style={styles.chevronLeft} />
      </TouchableOpacity>
      <Image style={styles.logo} source={require('../../assets/images/erb1.png')} />
      <TouchableOpacity onPress={() => _signOutAsync(navigation)}>
        <Icon color={'#fff'} name={'log-out'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const _signOutAsync = async (navigation) => {
  await AsyncStorage.clear();
  navigation.navigate('Auth');
};

export default Header;
