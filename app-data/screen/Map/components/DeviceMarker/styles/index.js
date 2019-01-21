import {StyleSheet} from 'react-native';

const markerBorder = 2,
      markerContainerSize = 50,
      markerSize = 25;

export default StyleSheet.create({
  markerContainer: {
    backgroundColor: 'rgba(0, 116, 217, 0.25)',
    borderRadius: markerContainerSize / 2,
    borderColor: 'rgba(0, 116, 217, 0.5)',
    borderWidth: 1,
    height: markerContainerSize,
    position: 'relative',
    width: markerContainerSize,
  },
  marker: {
    backgroundColor: '#0074D9',
    borderColor: '#FFF',
    borderRadius: markerSize / 2,
    borderWidth: markerBorder,
    height: markerSize,
    left: (markerContainerSize / 2) - ((markerSize + markerBorder) / 2),
    position: 'absolute',
    top: (markerContainerSize / 2) - ((markerSize + markerBorder) / 2),
    width: markerSize,
  },
});
