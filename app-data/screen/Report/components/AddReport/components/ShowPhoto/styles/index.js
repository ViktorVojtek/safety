import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  cameraImage: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    width,
  },
  cameraImageClose: {
    alignItems: 'center',
    backgroundColor: '#ff0068',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    right: 10,
    position: 'absolute',
    top: 10,
    width: 40,
    zIndex: 1,
  },
  cameraImageContainer: {
    flex: 1,
    left: 0,
    position: 'relative',
    width,
  },
});
