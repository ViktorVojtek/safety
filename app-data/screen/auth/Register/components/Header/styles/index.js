import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#00bcff',
    borderBottomColor: '#21c6fb',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  partContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  chevronLeft: {
    width: 40,
  },
  registerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
