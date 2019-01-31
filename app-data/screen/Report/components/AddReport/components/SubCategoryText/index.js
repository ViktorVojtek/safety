import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import getSubCategoryQuery from '../../graphql/getSubCategory.query';
import styles from '../../styles';

export default graphql(getSubCategoryQuery, {
  options: ({ categoryId, subCategoryId }) => ({ variables: { categoryId, subCategoryId } }),
})(({ data: { getSubCategory } }) => {
  if (!getSubCategory) {
    return <ActivityIndicator />;
  }

  const { categoryName } = getSubCategory;

  return (
    <View style={styles.textContainer}>
      <Text>{categoryName}</Text>
    </View>
  );
});
