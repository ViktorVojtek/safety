import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import { getDialNumbersQuery } from '../../graphql/queries';
import { strings } from '../../shared/config';
import Header from './components/Header';
import FlatListItem from './components/FlatListItem';
import styles from './styles';

const QuickDial = graphql(getDialNumbersQuery)((props) => {
  const { data: { error, loading } } = props;

  if (error) {
    return <View><Text>{error}</Text></View>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { data: { dialNumbers } } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={dialNumbers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FlatListItem
            data={item}
            index={index}
            important={item.dialNumberItem === '112'}
          />
        )}
      />
    </View>
  );
});

QuickDial.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { quickDial } } } = strings;

    return <Header navigation={navigation} title={quickDial} />;
  },
};

export default QuickDial;
