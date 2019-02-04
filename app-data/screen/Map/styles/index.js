import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../shared/config';

const { colors: { lightGrey } } = styles;
const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightGrey,
  },
  halfContainer: {
    flex: 0.5,
  },
  /* map: {
    height: (height * 0.5) - 70,
    width,
  },
  mapContainer: {
    flex: 0.5,
  }, */
});
