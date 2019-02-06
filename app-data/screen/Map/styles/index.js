import { StyleSheet } from 'react-native';
import { styles } from '../../../shared/config';

const { colors: { lightGrey } } = styles;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: lightGrey,
  },
});
