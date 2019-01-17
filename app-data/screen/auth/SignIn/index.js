import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

const SignIn = (props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Siginng Screen</Text>
      <Button title="Sign in!" onPress={() => _signInAsync(navigation)} />
    </View>
  );
};

const _signInAsync = async (navigation) => {
  await AsyncStorage.setItem('userToken', 'abc');
  navigation.navigate('App');
};

SignIn.navigationOptions = {
  title: 'Please Sign In'
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

export default SignIn;
