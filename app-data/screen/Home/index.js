import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from '../../shared/components/Header';
import styles from './styles';

const Home = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

Home.navigationOptions = {
  header: ({navigation}) => <Header navigation={navigation} />,
};

export default Home;
