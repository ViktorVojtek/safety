import React from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FlatListItem from '../FlatListItem';
import {graphql} from 'react-apollo';
import reportSubCategories from './graphql/reportSubCategories.query';
import styles from './styles';

const SubCategory = graphql(reportSubCategories)((props) => {
  const {data: {error, loading, reportSubCategories}, navigation} = props;

  if (error) {
    return (<View><Text>{error.message}</Text></View>);
  }
  if (loading) {
    return <ActivityIndicator />
  }

  const {subCategories} = reportSubCategories;
  console.log(subCategories);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <FlatList
        data={subCategories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (<FlatListItem title={item.categoryName}/>);
        }}
        style={styles.flatList}
      />
    </View>
  );
});

export default SubCategory;
