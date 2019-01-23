import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: (height / 2) - 25,
    width: width * 0.7,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    width,
  },
});
