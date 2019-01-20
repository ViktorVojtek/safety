import React from 'react';
import {
  Dimensions,
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
      <View style={styles.partContainer}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <Icon name={'chevron-left'} color={'#fff'} size={25} style={styles.chevronLeft} />
        </TouchableOpacity>
      </View>
      <View style={styles.partContainer}>
        <Text style={styles.registerText}>Register</Text>
      </View>
      <View style={styles.partContainer}></View>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bcff',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    // paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  partContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  chevronLeft: {
    width: 40,
  },
  registerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
