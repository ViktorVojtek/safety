import {ApolloClient} from 'apollo-boost'; // 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {withClientState} from 'apollo-link-state';

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

const domain = 'localhost'; // 'localhost' 192.168.1.229;
const protocol = 'http';
const port = 3543;

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({
    uri: protocol + '://' + domain + ':' + port + '/graphql'
  })]),
});
