import React from 'react';
import {
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey, mediumGrey, white } } = stylesConfig;

const FlatListItem = ({ data: { dialNumberItem, dialNumberItemTitle }, index, important }) => (
  <TouchableOpacity onPress={() => Linking.openURL(`tel://${dialNumberItem}`)}>
    <View
      style={[styles.container, {
        backgroundColor: important ? '#f70004' : white,
        marginTop: index === 0 ? 20 : 10,
      }]}
    >
      <Text
        style={[styles.itemText, {
          color: important ? white : darkGrey,
          fontWeight: 'bold',
        }]}
      >
        {dialNumberItem}
      </Text>
      <Text
        style={[styles.itemText, {
          color: important ? white : darkGrey,
          fontWeight: important ? 'bold' : 'normal',
        }]}
      >
        {dialNumberItemTitle}
      </Text>
      <Icon color={important ? white : mediumGrey} name="phone" size={20} />
    </View>
  </TouchableOpacity>
);

FlatListItem.propTypes = {
  data: PropTypes.shape({
    dialNumberItem: PropTypes.string.isRequired,
    dialNumberItemTitle: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  important: PropTypes.bool.isRequired,
};

export default FlatListItem;
