import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    height: height - 140,
    width,
  },
});
