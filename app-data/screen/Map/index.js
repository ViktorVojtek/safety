import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../../shared/components/Header';

const Map = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Map Screen</Text>
  </View>
);

Map.navigationOptions = {
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

export default Map;
