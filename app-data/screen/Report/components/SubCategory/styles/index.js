import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flatList: {
    width,
  },
});
