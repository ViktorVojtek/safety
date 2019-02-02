import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const { height, width } = Dimensions.get('screen');
const computedHeight = height * 0.6;
const { colors: { darkGrey } } = styles;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    flex: 1,
    height: computedHeight,
    marginVertical: 10,
    width: width - 40,
  },
  containerHalf: {
    flex: 0.5,
    padding: 15,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 0.5,
    width: width - 40,
  },
  image: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flex: 1,
    height: computedHeight / 2,
    width: null,
  },
  textCategory: {
    color: '#00b5cd',
    // marginBottom: 10,
    // marginTop: 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textDescription: {
    color: darkGrey,
  },
  textSubCategory: {
    fontSize: 20,
    // marginBottom: 10,
  },
});
