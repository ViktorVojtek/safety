import React from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles as styleConfig } from '../../../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey, mediumGrey, white } } = styleConfig;

export default (props) => {
  const { categoryId, data: { categoryName, id }, lastItem, navigation } = props;
  const subCategoryId = id;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddReport', {
      categoryId,
      subCategoryId
    })}>
      <View style={[styles.flatListItem, { borderBottomWidth: lastItem ? 0 : 1 }]}>
        <Text>{ categoryName }</Text>
        <Icon color={darkGrey} name={'chevron-right'} size={30} style={styles.chevron} />
      </View>
    </TouchableOpacity>
  );
};
