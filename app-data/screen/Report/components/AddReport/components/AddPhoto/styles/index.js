import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../../../shared/config';

const {
  colors: {
    darkGrey,
  },
} = styles;
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  choosePhotoButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width,
  },
  choosePhotoIconContainer: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff0068',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  choosePhotoText: {
    color: darkGrey,
    marginTop: 20,
    textTransform: 'uppercase',
  },
});
