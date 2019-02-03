import { StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const { colors: { lightGrey, white } } = styles;

export default StyleSheet.create({
  marker: {
    backgroundColor: '#006de6',
    borderColor: lightGrey,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  text: {
    color: white,
  },
});
