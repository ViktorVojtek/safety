import { /* Dimensions, */ StyleSheet } from 'react-native';

// const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  button: {
    backgroundColor: '#0074d9',
    borderRadius: 4,
    // color: '#fff',
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    // width: width * 0.8,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 6,
    flex: 1,
    // height: (height - 150) * 0.8,
    justifyContent: 'space-between',
    margin: 20,
    padding: 20,
    // width: width * 0.8,
  },
  erbImage: {
    flex: 1,
    height: 70, // 85,
    width: 70, // 75,
  },
  partContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textWhite: {
    color: '#fff',
  },
});
