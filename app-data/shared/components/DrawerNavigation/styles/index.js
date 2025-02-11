import { StyleSheet } from 'react-native';
import { styles } from '../../../config';

const {
  colors: {
    darkGrey,
    lightGrey,
    mediumGrey,
    white,
  },
} = styles;

export default StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: white,
    borderColor: mediumGrey,
    borderWidth: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  menuIcon: {
    height: 200,
    width: 200,
  },
  menuItem: {
    paddingVertical: 20,
    marginBottom: 10,
  },
  menuItemText: {
    color: darkGrey,
    fontWeight: 'bold',
  },
  logOutIcon: {
    marginRight: 5,
  },
});
