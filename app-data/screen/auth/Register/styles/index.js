import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcff',
  },
  errorContainer: {
    backgroundColor: '#ff7668',
    borderWidth: 1,
    borderColor: '#ff4136',
    borderRadius: 4,
    left: (width / 2) - ((width * 0.8) / 2),
    padding: 10,
    position: 'absolute',
    top: height * 0.025,
    width: width * 0.8,
  },
  subContainerOneThird: {
    justifyContent: 'center',
    flex: 1,
  },
  subContainerTwoThird: {
    justifyContent: 'flex-end',
    flex: 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    width: width * 0.8,
  },
  textWhite: {
    color: '#fff',
    textAlign: 'center',
  },
});
