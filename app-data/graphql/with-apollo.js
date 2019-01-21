import {ApolloClient} from 'apollo-boost'; // 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {withClientState} from 'apollo-link-state';
import gql from 'graphql-tag';

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      setGPSCoords: (_, {longitude, latitude}, {cache}) => {
        const {gps} = cache.readQuery({
          query: gql`
            {
              gps {
                longitude
                latitude
              }
            }
          `
        });
        const data = {
          gps: {
            __typename: 'Gps',
            latitude,
            longitude,
          },
        };

        cache.writeData({data});

        return null;
      },
      toggleSplash: (_, {value}, {cache}) => {
        const {splash} = cache.readQuery({
          query: gql`
            {
              splash {
                value
              }
            }
          `
        });
        const data = {
          splash: {
            __typename: 'Splash',
            value,
          }
        };

        cache.writeData({data});

        return null;
      },
    }
  },
  defaults: {
    splash: {
      __typename: 'Splash',
      value: true,
    },
    gps: {
      __typename: 'Gps',
      latitude: 37.785834,
      longitude: -122.406417,
    },
  },
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
