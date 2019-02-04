import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default StyleSheet.create({
  map: {
    height: (height * 0.5) - 70,
    width,
  },
  mapContainer: {
    flex: 0.5,
    position: 'relative',
  },
  resetToDevicePosition: {
    bottom: 10,
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
});
