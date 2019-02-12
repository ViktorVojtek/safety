import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../shared/config';

const { height, width } = Dimensions.get('screen');
const {
  colors: {
    darkGrey, lightGrey, mediumGrey, white,
  },
} = styles;

export default StyleSheet.create({
  button: {
    backgroundColor: '#0074d9',
    borderRadius: 4,
    color: '#fff',
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
    width: width * 0.8,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    height,
    width,
  },
  backgroundImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  erbContainer: {
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  erbImage: {
    flex: 1,
    height: 50, // 85,
    width: 50, // 75,
    // resizeMode: 'contain',
  },
  link: {
    color: darkGrey,
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginTitleText: {
    fontSize: 30,
    fontWeight: '200',
    marginBottom: 25,
    textAlign: 'center',
  },
  subContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    flex: 0.65,
    padding: 20,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: white, // lightGrey,
    borderColor: mediumGrey,
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 20,
    paddingBottom: 20, // 20
    paddingTop: 20, // 20
    textAlign: 'center',
    width: width * 0.8,
  },
  textWhite: {
    color: white,
    textAlign: 'center',
  },
});
