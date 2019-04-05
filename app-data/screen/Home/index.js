import React from 'react';
import {
  ActivityIndicator, FlatList, /* PushNotificationIOS, */ Text, View,
} from 'react-native';
import { graphql, compose } from 'react-apollo';
// import PushNotification from 'react-native-push-notification';
import Header from '../../shared/components/Header';
import FlatListItem from './components/FlatListItem';
import NoCollection from './components/NoCollection';
import { getReportsQuery } from '../../graphql/queries';
// import newNotificationSub from '../../graphql/subscriptions';
import { strings } from '../../shared/config';
import { sortDateDescending } from '../../shared/lib';
// import NotificationService from '../../shared/components/Notification';
import styles from './styles';

const Home = compose(
  /* graphql(newNotificationSub, {
    props: (props) => {
      const { data: { newNotification } } = props;

      return { ...props, newNotification };
    },
  }), */
  graphql(getReportsQuery, {
    options: {
      variables: { reportQuery: { category: 'mobile' } }, // , offset: 0, limit: 10
      pollInterval: 60000,
    },
  }),
)((props) => {
  const { data: { error, loading, reports }, navigation /* , newNotification */ } = props;

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
