import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import styles from './styles';

const bootstrapAsync = async (navigation) => {
  const jwt = await AsyncStorage.getItem('jwt');

  navigation.navigate(jwt ? 'App' : 'Auth');
};

const AuthLoadingScreen = (props) => {
  const { navigation } = props;

  bootstrapAsync(navigation);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoadingScreen;
