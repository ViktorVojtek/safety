import { StyleSheet } from 'react-native';
import { styles as configStyle } from '../../../../../../../shared/config';

const { colors: { mediumGrey } } = configStyle;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: '#8f8f8f',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
