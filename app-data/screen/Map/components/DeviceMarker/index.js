import React from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import styles from './styles';

export default (props) => {
  const {coordinate} = props;

  return (
    <Marker coordinate={coordinate}>
      <View style={styles.markerContainer}>
        <View style={styles.marker}></View>
      </View>
    </Marker>
  );
};