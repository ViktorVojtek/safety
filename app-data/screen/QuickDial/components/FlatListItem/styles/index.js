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
    marginVertical: 5,
    paddingLeft: 20,
    paddingVertical: 10,
    width: width - 20,
  },
  itemText: {
    color: darkGrey,
  },
});
