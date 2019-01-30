import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const { colors: { lightGrey, mediumGrey, white } } = styles;
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#ff0068',
    borderRadius: 4,
    marginVertical: 25,
    paddingVertical: 20,
    width: width - 40,
  },
  buttonText: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  container: {
    alignItems: 'center',
    backgroundColor: lightGrey,
    flex: 1,
  },
  camera: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    ...StyleSheet.absoluteFillObject
  },
  cameraContainer: {
    alignItems: 'center',
    borderWidth: 1,
    flex: 0.45,
    flexDirection: 'column',
    width
  },
  formContainer: {
    alignItems: 'center',
    flex: 0.55
  },
  textContainer: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width
  },
  textInput: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width
  }
});
