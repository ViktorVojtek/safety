import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {compose, graphql} from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
    mutation toggleSplash($value: Boolean) {
      toggleSplash(value: $value) @client {
        value
      }
    }
  `)((props) => {
    const {mutate} = props;
  
    startSplashOffCounter(false, mutate, 5);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  });

const startSplashOffCounter = (value, dispatch, sec) => {
  setTimeout(() => {
    toggleSplash(value, dispatch);
  }, sec * 1000);
};
const toggleSplash = (value, dispatch) => {
  dispatch({variables: {value}});
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
