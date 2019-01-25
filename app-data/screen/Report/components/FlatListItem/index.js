import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default (props) => {
  const {categoryId, title, navigation} = props;

  return (
    <View style={styles.flatListItem}>
      <TouchableOpacity onPress={() => navigation.navigate('SubCategory', {categoryId})}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

/*
Passing parametres to navigation

navigation.navigate('Details', {
  itemId: 86,
  otherParam: 'anything you want here',
});
*/