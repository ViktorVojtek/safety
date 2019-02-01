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

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({
    uri: `${protocol}://${domain}:${port}/graphql`,
  })]),
});

export default client;
