import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../../shared/config';

const {
  colors: {
    darkGrey, lightGrey, mediumGrey, white,
  },
} = styles;
const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: '#ff0068',
    borderRadius: 4,
    marginVertical: 25,
    paddingVertical: 20,
    width: width - 40,
  },
  buttonText: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  choosePhotoIconContainer: {
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ff0068',
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  choosePhotoButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width,
  },
  choosePhotoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  choosePhotoText: {
    color: darkGrey,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  container: {
    alignItems: 'center',
    backgroundColor: lightGrey,
    flex: 1,
  },
  camera: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    ...StyleSheet.absoluteFillObject,
  },
  cameraContainer: {
    alignItems: 'center',
    // borderWidth: 1,
    flex: 0.45,
    flexDirection: 'column',
    width,
  },
  formContainer: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 0.55,
  },
  textContainer: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width,
  },
  textInput: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width,
  },
});
