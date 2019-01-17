import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../shared/components/Header';

const Report = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Report Screen</Text>
  </View>
);

Report.navigationOptions = {
  header: ({navigation}) => <Header navigation={navigation} />,
};

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

export default Report;
