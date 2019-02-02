import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../../../shared/config';

const { width } = Dimensions.get('screen');
const { colors: { white } } = styles;

export default StyleSheet.create({
  activityIndicator: {
    marginVertical: 20,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 6,
    padding: 20,
    width: width * 0.7,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
});
