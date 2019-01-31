import React from 'react';
import { Text, View } from 'react-native';
import { graphql } from 'react-apollo';
import getCategoryQuery from '../../graphql/getCategory.query';
import styles from '../../styles';

export default graphql(getCategoryQuery, {
  options: ({ categoryId }) => {
    const id = categoryId;

    return { variables: { id } };
  },
  props: (props) => {
    const { data } = props;

    if (data.getCategory) {
      const { getCategory: { categoryName } } = data;

      return { ...props, categoryName };
    }

    return props;
  },
})(({ categoryName }) => (
  <View style={styles.textContainer}>
    <Text>{categoryName}</Text>
  </View>
));
