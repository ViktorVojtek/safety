import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Map Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
