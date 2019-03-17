import { StyleSheet } from 'react-native';
import { styles as configStyles } from '../../../shared/config';

const { colors: { lightGrey, mediumGrey, white } } = configStyles;

export default StyleSheet.create({
  addButton: {
    backgroundColor: '#6ebad2',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: lightGrey,
  },
  header: {
    alignItems: 'center',
    backgroundColor: white,
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    height: 60,
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 0.5,
    position: 'relative',
  },
  addUserWrapper: {
    flexDirection: 'row',
  },
  textInputContainer: {
    flex: 0.5,
  },
  textInput: {
    borderBottomColor: mediumGrey,
    borderBottomWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
  },
  textWhite: {
    color: '#fff',
  },
});
