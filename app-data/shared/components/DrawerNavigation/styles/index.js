import { StyleSheet } from 'react-native';
import { styles } from '../../../config';

const { colors: { lightGrey, mediumGrey, white } } = styles;

export default StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    flex: 1
  },
  header: {
    backgroundColor: white,
    borderColor: mediumGrey,
    borderWidth: 1,
    height: 80
  }
});