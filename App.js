/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {ApolloProvider} from 'react-apollo';
import {client} from './app-data/graphql/with-apollo';
import Router from './app-data/router';

const App = (props) => (
  <SafeAreaView style={styles.safeArea}>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});

export default App;
