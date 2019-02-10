import { AsyncStorage } from 'react-native';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';
import { withClientState } from 'apollo-link-state';

import defaults from './defaults';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs,
});

const domain = 'localhost'; // 'localhost'; // '192.168.1.229'; 192.168.22.47; '127.0.0.1';
const protocol = 'http';
const port = 3543;

const customFetch = async (uri, options) => {
  const token = await AsyncStorage.getItem('jwt'); // getCookie('jwt', options);
  // console.warn(token);

  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      'x-access-token': token || '',
    },
  });
};

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({
    uri: `${protocol}://${domain}:${port}/graphql`,
    fetch: customFetch,
  })]),
});

export default client;
