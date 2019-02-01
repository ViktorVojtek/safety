import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { compose, graphql } from 'react-apollo';
import { strings } from '../../../../shared/config';
import FlatListItem from './components/FlatListItem';
import Header from './components/Header';
import { reportQuery, getSubCategoriesQuery } from '../../../../graphql/queries';
import styles from './styles';

const SubCategory = compose(
  graphql(reportQuery),
  graphql(getSubCategoriesQuery, {
    options: ({ data: { report: { categoryId } } }) => ({ variables: { id: categoryId } }),
  }),
)((props) => {
  const {
    data: { error, loading, getSubCategories },
    navigation,
  } = props;

  if (error) {
    return <View><Text>{error.message}</Text></View>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { categoryName, id, subCategories } = getSubCategories;
  const cId = parseInt(id.split('-')[0], 10);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={{
        borderBottomColor: cId < 2 ? (cId < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
        borderBottomWidth: 5,
      }}
      >
        <Image
          blurRadius={6}
          resizeMode="cover"
          source={
            cId < 2
              ? (
                cId < 1
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
        data={subCategories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <FlatListItem
            data={item}
            navigation={navigation}
            lastItem={index === subCategories.length - 1}
          />
        )}
        style={styles.flatList}
      />
    </View>
  );
});

SubCategory.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { report } } } = strings;

    return <Header navigation={navigation} title={report} />;
  },
};

export default SubCategory;
