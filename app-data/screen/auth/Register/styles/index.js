import { Dimensions, StyleSheet } from 'react-native';
import { styles } from '../../../../shared/config';

const { height, width } = Dimensions.get('screen');
const { colors: { darkGrey, lightGrey } } = styles;

export default StyleSheet.create({
  backgroundImage: {
    height,
    width,
  },
  backgroundImageContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: '#0074d9',
    borderRadius: 4,
    color: '#fff',
    marginBottom: 10,
    paddingBottom: 20,
    paddingTop: 20,
    width: width * 0.8,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#00bcff',
  },
  erbContainer: {
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  erbImage: {
    flex: 1,
    height: 50, // 85,
    width: 50, // 75,
    resizeMode: 'contain',
  },
  link: {
    color: darkGrey,
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginTitleText: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: 'center',
  },
  subContainer: {
    backgroundColor: '#fff',
    borderRadius: 6,
    flex: 0.765,
    padding: 20,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: lightGrey,
    borderRadius: 4,
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
    width: width * 0.8,
  },
  textWhite: {
    color: '#fff',
    textAlign: 'center',
  },
});
