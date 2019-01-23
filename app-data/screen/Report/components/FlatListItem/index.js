import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default (props) => {
  const {title} = props;

  return (
    <View style={styles.flatListItem}>
      <TouchableOpacity>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};