import { StyleSheet } from 'react-native';
import { styles as configStyles } from '../../../shared/config';

const { colors: { lightGrey, mediumGrey, white } } = configStyles;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGrey,
  },
  header: {
    backgroundColor: white,
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    height: 50,
  },
  mapContainer: {
    flex: 0.5,
    position: 'relative',
  },
});
