import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { graphql } from 'react-apollo';
import { getCategoryQuery } from '../../../../../../../../graphql/queries';
import styles from '../../styles';

export default graphql(getCategoryQuery, {
  options: ({ categoryId }) => ({ variables: { id: categoryId } }),
})(({ data: { error, loading, getCategory }, noStyle }) => {
  if (error) {
    return <Text>{error.message}</Text>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { categoryName } = getCategory;

  return <Text style={!noStyle ? styles.textCategory : null}>{categoryName}</Text>;
});
