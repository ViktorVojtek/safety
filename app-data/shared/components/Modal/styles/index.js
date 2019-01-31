import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../config';

const { width } = Dimensions.get('screen');
const { colors: { darkGrey, white } } = styles;

export default StyleSheet.create({
  buttonClose: {
    backgroundColor: darkGrey,
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 20,
    width: width * 0.7,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  textWhite: {
    color: white,
  },
});
