import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { strings } from '../../../../shared/config';
import FlatListItem from './components/FlatListItem';
import Header from './components/Header';
import styles from './styles';

const SubCategory = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam('id');
  const categoryName = navigation.getParam('categoryName');
  const data = navigation.getParam('data');
  const otherItem = {
    categoryName: 'Iné',
    categoryType: 'OTHER',
    id: 99
  };
  const list = data.concat(otherItem);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <View style={{
          borderBottomColor: categoryId < 2 ? (categoryId < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
          borderBottomWidth: 5
        }}>
        <Image
          blurRadius={6}
          resizeMode={'cover'}
          source={
            categoryId < 2 ?
            (
              categoryId < 1 ?
              require('../../../../shared/assets/images/Traffic.jpeg') :
              require('../../../../shared/assets/images/Infrastructure.jpeg')
            ) : require('../../../../shared/assets/images/Police.png')
          }
          style={styles.image}
        />
        <View style={[styles.imageOverlay, { alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={styles.titleText}>{ categoryName }</Text>
        </View>
      </View>
      <View style={styles.textSubCategoryWrapper}>
        <Text>Zvoľte podkategóriu</Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <FlatListItem
            data={item}
            categoryId={item.id}  
            navigation={navigation}
            title={item.categoryName}
            lastItem={index === list.length - 1 ? true : false}
          />
        )}
        style={styles.flatList}
      />
    </View>
  );
};

SubCategory.navigationOptions = {
  header: ({navigation}) => {
    const { header: { title: {report} } } = strings;

    return <Header navigation={navigation} title={report} />;
  }
};

/*
<Image
  blurRadius={6}
  resizeMode={'cover'}
  source={
    categoryId < 2 ?
    (
      categoryId < 1 ?
      require('../../../../../../shared/assets/images/Traffic.jpeg') :
      require('../../../../../../shared/assets/images/Infrastructure.jpeg')
    ) : undefined
  }
  style={styles.image}
/>
/*const SubCategory = graphql(reportSubCategories, {
  options: (props) => {
    const {navigation: {getParam}} = props;
    const id = getParam('categoryId');

    return {variables: {id}};
  }
})((props) => {
  console.log('SubCategory Screen Component');
  console.log(props);
  const {navigation} = props;
  const data = navigation.getParam('data');

  console.log(data);

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
  );
});*/

export default SubCategory;

/*
, {
  props: ({data: {adminActivePage: {value}}}) => ({adminActivePage: value})
}
*/
