import React from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
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
    id: 99,
  };
  const list = data.concat(otherItem);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={{
        borderBottomColor: categoryId < 2 ? (categoryId < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
        borderBottomWidth: 5,
      }}
      >
        <Image
          blurRadius={6}
          resizeMode="cover"
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
        renderItem={({ item, index }) => (
          <FlatListItem
            data={item}
            categoryId={item.id}
            navigation={navigation}
            title={item.categoryName}
            lastItem={index === list.length - 1}
          />
        )}
        style={styles.flatList}
      />
    </View>
  );
};

SubCategory.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { report } } } = strings;

    return <Header navigation={navigation} title={report} />;
  },
};

export default SubCategory;
