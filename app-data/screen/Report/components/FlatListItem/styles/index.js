import { Dimensions, StyleSheet } from 'react-native';
import {styles} from '../../../../../shared/config';

const { height, width } = Dimensions.get('screen');
const computedHeight = (height - 140) / 3;
const { colors: { mediumGrey, white } } = styles;

export default StyleSheet.create({
  chevron: {
    position: 'absolute',
    right: 20
  },
  flatListItem: {
    height: computedHeight,
    position: 'relative'
  },
  image: {
    height: computedHeight,
    left: 0,
    position: 'absolute',
    top: 0,
    width
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  link: {
    alignItems: 'center',
    flexDirection: 'row',
    height: computedHeight,
    justifyContent: 'center',
    paddingHorizontal: 20,
    width
  },
  linkDivider: {
    borderRadius: 4,
    height: 5,
    left: (width / 2) - (((width / 2) + 40) / 2),
    marginVertical: 10,
    position: 'relative',
    width: width / 2,
  },
  textWhite: {
    color: white,
    textAlign: 'center'
  },
  titleText: {
    color: white,
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'lowercase'
  }
});