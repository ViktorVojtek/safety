import React from 'react';
import {
  AsyncStorage,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
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

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1060a6', // '#e3e3e3',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  logo: {
    height: 45,
    // marginTop: 10,
    left: (width / 2) - 20,
    position: 'absolute',
    top: (45 / 2),
    width: 40,
  }
});

export default Header;
