import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../shared/config';

const { colors: { lightGrey } } = styles;
const { height, width } = Dimensions.get('screen');

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
    backgroundColor: lightGrey,
  },
  flatList: {
    width,
  },
});
