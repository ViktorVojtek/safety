import React from 'react';
import {Dimensions, StyleSheet, Platform} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  title: {
    color: '#8f8f8f',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});
