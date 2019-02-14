import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    alignItems: 'flex-start',
    flex: 1, // 0.5,
    justifyContent: 'flex-start',
    position: 'relative',
    width,
  },
  resetToDevicePosition: {
    bottom: 10,
    position: 'absolute',
    right: 10,
    zIndex: 1,
  },
});
