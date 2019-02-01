import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import { getSubCategoryQuery } from '../../../../../../graphql/queries';
import styles from '../../styles';

export default graphql(getSubCategoryQuery, {
  options: ({ subCategoryId }) => ({ variables: { id: subCategoryId } }),
})(({ data: { error, getSubCategory, loading } }) => {
  if (error) {
    return <View><Text>{error}</Text></View>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { categoryName } = getSubCategory;

  return (
    <View style={styles.textContainer}>
      <Text>{categoryName}</Text>
    </View>
  );
});
