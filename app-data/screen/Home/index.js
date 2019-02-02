import React from 'react';
import {
  ActivityIndicator, FlatList, Text, View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Header from '../../shared/components/Header';
import { getReportsQuery } from '../../graphql/queries';
import { strings } from '../../shared/config';
import styles from './styles';

const Home = graphql(getReportsQuery)(({ data: { error, loading, reports } }) => {
  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList
        data={reports}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.address}</Text>}
      />
    </View>
  );
});

Home.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { home } } } = strings;

    return <Header navigation={navigation} title={home} />;
  },
};

export default Home;
