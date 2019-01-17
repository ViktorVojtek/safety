import React from 'react';
import {
  AsyncStorage,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const Header = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/erb.png')} />
      <TouchableHighlight onPress={() => _signOutAsync(navigation)}>
        <Text>Log out</Text>
      </TouchableHighlight>
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
    backgroundColor: '#e3e3e3',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'flex-end',
    paddingHorizontal: 5,
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
