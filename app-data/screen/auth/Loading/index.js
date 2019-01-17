import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const AuthLoadingScreen = (props) => {
  const {navigation} = props;

  _bootstrapAsync(navigation);

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const _bootstrapAsync = async (navigation) => {
  const userToken = await AsyncStorage.getItem('userToken');

  navigation.navigate(userToken ? 'App' : 'Auth');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default AuthLoadingScreen;
