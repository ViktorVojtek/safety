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
  const categoryId = navigation.getParam('categoryId');
  const id = parseInt(categoryId.split('-')[0], 10);
  const categoryName = navigation.getParam('categoryName');
  const data = navigation.getParam('data');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={{
        borderBottomColor: id < 2 ? (id < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
        borderBottomWidth: 5,
      }}
      >
        <Image
          blurRadius={6}
          resizeMode="cover"
          source={
            id < 2
              ? (
                id < 1
                  ? require('../../../../shared/assets/images/Traffic.jpeg') : require('../../../../shared/assets/images/Infrastructure.jpeg')
              ) : require('../../../../shared/assets/images/Police.png')
          }
          style={styles.image}
        />
        <View style={[styles.imageOverlay, { alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={styles.titleText}>{categoryName}</Text>
        </View>
      </View>
      <View style={styles.textSubCategoryWrapper}>
        <Text>Zvoľte podkategóriu</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FlatListItem
            data={item}
            categoryId={categoryId}
            subCategoryId={item.id}
            navigation={navigation}
            title={item.categoryName}
            lastItem={index === data.length - 1}
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
