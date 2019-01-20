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
      <Text style={styles.text}>Log In</Text>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#00bcff',
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
