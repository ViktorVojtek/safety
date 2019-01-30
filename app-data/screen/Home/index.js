import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../shared/components/Header';
import { strings } from '../../shared/config';
import styles from './styles';

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
  </View>
);

Home.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { home } } } = strings;

    return <Header navigation={navigation} title={home} />;
  },
};

export default Home;
