import React from 'react';
import {
  ActivityIndicator, FlatList, Text, View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Header from '../../shared/components/Header';
import FlatListItem from './components/FlatListItem';
import NoCollection from './components/NoCollection';
import { getReportsQuery } from '../../graphql/queries';
import { strings } from '../../shared/config';
import { sortDateDescending } from '../../shared/lib';
import NotificationWrapper from '../../shared/components/Notification';
import styles from './styles';

const Home = graphql(getReportsQuery, {
  options: { variables: { reportQuery: { offset: 0, limit: 10 } } },
})((props) => {
  const { data: { error, loading, reports }, navigation } = props;

  if (error) {
    return <View style={styles.container}><Text>{error.message}</Text></View>;
  }
  if (loading) {
    return <View style={styles.container}><ActivityIndicator /></View>;
  }

  const { items } = reports;

  const sortedReportList = sortDateDescending(items);

  return (
    <View style={styles.container}>
      <NotificationWrapper />
      {
        sortedReportList.length > 0
          ? (
            <FlatList
              data={sortedReportList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <FlatListItem
                  address={item.address}
                  categoryId={item.categoryId}
                  date={item.dateCreated}
                  description={item.description}
                  navigation={navigation}
                  subCategoryId={item.subCategoryId}
                  imageURI={item.image.data}
                  gpsCoords={item.gpsCoords}
                  data={item}
                />
              )}
            />
          ) : <NoCollection navigation={navigation} />
      }
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
