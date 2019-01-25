import React from 'react';
import { Text, View } from 'react-native';
import { strings } from '../../shared/config';
import Header from './components/Header';
import styles from './styles';

const QuickDial = (props) => (
  <View style={styles.container}>
    <Text>Quick Dial</Text>
  </View>
);

QuickDial.navigationOptions = {
  header: ({navigation}) => {
    const { header: { title: { quickDial } } } = strings;

    return <Header navigation={navigation} title={quickDial} />;
  }
};

export default QuickDial;
