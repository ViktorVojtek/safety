import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {compose, graphql} from 'react-apollo';
import Header from '../../shared/components/Header';
import FlatListItem from './components/FlatListItem';
import styles from './styles';
import reportCategories from './graphql/reportCategories.query';

const Report = compose(
  graphql(reportCategories),
)((props) => {
  console.log(props);
  const {data: {error, loading, reportCategories}, navigation} = props;

  if (error) {
    return (<View><Text>{error.message}</Text></View>);
  }
  if (loading) {
    return <ActivityIndicator />
  }

  const {categories} = reportCategories;
  console.log(categories);
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (<FlatListItem title={item.categoryName}/>);
        }}
        style={styles.flatList}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SubCategory')}>
        <Text style={styles.buttonText}>Sub Categories Screen</Text>
      </TouchableOpacity>
    </View>
  );
});

Report.navigationOptions = {
  header: ({navigation}) => <Header navigation={navigation} />,
};

export default Report;
