import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { graphql } from 'react-apollo';
import { getSubCategoryQuery } from '../../../../../../../../graphql/queries';
import styles from '../../styles';
import { styles as stylesConfig } from '../../../../../../../../shared/config';

const { colors: { darkGrey } } = stylesConfig;

export default graphql(getSubCategoryQuery, {
  options: ({ subCategoryId }) => ({ variables: { id: subCategoryId } }),
})(({ data: { error, loading, getSubCategory }, noStyle }) => {
  if (error) {
    return <Text>{error.message}</Text>;
  }
  if (loading) {
    return <ActivityIndicator />;
  }

  const { categoryName } = getSubCategory;

  return (
    <Text style={!noStyle ? [styles.textCategory, { color: darkGrey }] : null}>{categoryName}</Text>
  );
});
