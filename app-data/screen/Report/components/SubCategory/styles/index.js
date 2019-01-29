import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const { height, width } = Dimensions.get('screen');
const { colors: { lightGrey, mediumGrey } } = styles;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightGrey // '#F5FCFF',
  },
  flatList: {
    width,
  },
  image: {
    height: height * 0.15,
    width
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  textSubCategoryWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    width
  },
  textWhite: {
    color: '#fff',
    fontWeight: 'bold'
  },
  titleText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'lowercase'
  }
});
