import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#00bcff',
    borderBottomColor: '#21c6fb',
    borderBottomWidth: 1,
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});