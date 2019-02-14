import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHalf: {
    flex: 0.5,
    justifyContent: 'space-around',
    padding: 20,
  },
  containerColumn: {
    flexDirection: 'row',
  },
  containerHorizontalHalf: {
    flex: 0.5,
  },
  containerImage: {
    flex: 0.5,
  },
  image: {
    flex: 1,
    height: height / 2,
    width: null,
  },
  textRight: {
    textAlign: 'right',
  },
});
