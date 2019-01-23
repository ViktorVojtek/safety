import React from 'react';
import {Dimensions, StyleSheet, Platform} from 'react-native';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
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
