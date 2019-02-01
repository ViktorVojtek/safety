import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Icon from 'react-native-vector-icons/Feather';
import { setReportDataMutation } from '../../../../../../graphql/mutations';
import { styles as styleConfig } from '../../../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey } } = styleConfig;

export default graphql(setReportDataMutation)(({
  data: { id, categoryName },
  lastItem,
  mutate,
  navigation,
}) => (
  <TouchableOpacity onPress={async () => {
    const reportData = { subCategoryId: id };

    await mutate({ variables: { reportData } });

    navigation.navigate('AddReport');
  }}
  >
    <View style={[styles.flatListItem, { borderBottomWidth: lastItem ? 0 : 1 }]}>
      <Text>{categoryName}</Text>
      <Icon color={darkGrey} name="chevron-right" size={30} style={styles.chevron} />
    </View>
  </TouchableOpacity>
));
