import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const { colors: { darkGrey, white } } = styles;
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: width - 20,
  },
  itemText: {
    color: darkGrey,
  },
});
