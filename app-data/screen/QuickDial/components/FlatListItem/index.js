import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey, mediumGrey, white } } = stylesConfig;

const FlatListItem = ({ data: { dialNumberItem, dialNumberItemTitle }, index, important }) => (
  <View
    style={[styles.container, {
      backgroundColor: important ? '#f70004' : white,
      marginTop: index === 0 ? 10 : 5,
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
    <Icon color={important ? white : mediumGrey} name="chevron-right" size={30} />
  </View>
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
