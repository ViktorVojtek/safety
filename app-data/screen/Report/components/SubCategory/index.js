import React from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FlatListItem from '../FlatListItem';
import {graphql, Query} from 'react-apollo';
import reportSubCategories from './graphql/subCategories.query';
import styles from './styles';

const SubCategory = graphql(reportSubCategories, {
  options: (props) => {
    const {navigation: {getParam}} = props;
    const id = getParam('categoryId');

    return {variables: {id}};
  }
})((props) => {
  console.log('SubCategory Screen Component');
  console.log(props);
  const {navigation} = props;

  return (
    <View>
      <Text>Sub Category Screen</Text>
    </View>
  );

  /*if (error) {
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
  );*/
});

export default SubCategory;

/*
, {
  props: ({data: {adminActivePage: {value}}}) => ({adminActivePage: value})
}
*/
