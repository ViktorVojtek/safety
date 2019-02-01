import { ApolloClient } from 'apollo-boost'; // 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

import defaults from './defaults';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const cache = new InMemoryCache({
  dataIdFromObject: (o) => { o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}` },
});
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
