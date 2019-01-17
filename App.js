/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {client} from './app-data/graphql/with-apollo';
import Router from './app-data/router';

const App = (props) => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
); 

export default App;
