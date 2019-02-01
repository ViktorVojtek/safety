import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import { strings } from '../../shared/config';
import Header from '../../shared/components/Header';
import FlatListItem from './components/FlatListItem';
import styles from './styles';
import { getCategoriesQuery } from '../../graphql/queries';

const Report = graphql(getCategoriesQuery)((props) => {
  const { data: { error, loading, categories }, navigation } = props;

  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <FlatListItem
            data={item}
            navigation={navigation}
            title={item.categoryName}
          />
        )}
        style={styles.flatList}
      />
    </View>
  );
});

Report.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { report } } } = strings;

    return <Header navigation={navigation} title={report} />;
  },
};

export default Report;
