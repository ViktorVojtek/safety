import { AsyncStorage } from 'react-native';
import ApolloClient from 'apollo-client';
import {
  // ApolloClient,
  ApolloLink,
  // HttpLink,
  // InMemoryCache,
  // split,
} from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { withClientState } from 'apollo-link-state';

import defaults from './defaults';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const domain = '192.168.10.67'; // '192.168.1.10'; // 'safetytrebisov.sk'; '192.168.1.229'; 192.168.22.47; '127.0.0.1';
const protocol = 'http'; // 'https';
const port = 3543;

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults,
  // resolvers,
  typeDefs,
});

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
  resolvers,
  link: ApolloLink.from([
    stateLink,
    split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      new WebSocketLink({
        uri: `ws://${domain}:${port}/graphql`,
        options: { reconnect: true },
      }),
      new HttpLink({
        uri: `${protocol}://${domain}:${port}/graphql`, // `${protocol}://${domain}:${port}/graphql`, // `${protocol}://${domain}/graphql`,
        fetch: customFetch,
      }),
    ),
  ]),
});

export default client;
