// import React from 'react';
import { StyleSheet } from 'react-native';
import { styles as configStyle } from '../../../config';

const { colors: { mediumGrey } } = configStyle;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // paddingTop: Platform.OS === 'ios' ? 0 : 0
  },
  menuIcon: {
    height: 25,
    width: 25,
  },
  title: {
    color: '#8f8f8f',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
