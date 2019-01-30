import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../../../shared/config';

const { width } = Dimensions.get('screen');
const { colors: { mediumGrey } } = styles;

export default StyleSheet.create({
  chevron: {
    position: 'absolute',
    right: 20,
  },
  flatListItem: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
    position: 'relative',
    width,
  },
});
