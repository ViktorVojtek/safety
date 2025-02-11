import React from 'react';
import { StyleSheet } from 'react-native';
import { styles } from '../../../shared/config';

const { colors: { lightGrey } } = styles;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightGrey,
  }
});
