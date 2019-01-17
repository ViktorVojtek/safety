import {ApolloClient} from "apollo-client";
import {ApolloLink} from "apollo-link";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {withClientState} from "apollo-link-state";
import gql from "graphql-tag";

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
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
            __typename: "Splash",
            value,
          }
        };

        cache.writeData({data});

        return null;
      },
      incrementCounter: (_, args, { cache }) => {
        const { counter } = cache.readQuery({
          query: gql`
            {
              counter {
                value
              }
            }
          `
        });
        const data = {
          counter: {
            __typename: "Counter",
            value: counter.value + 1
          }
        };

        cache.writeData({data});

        return null;
      },
    }
  },
  defaults: {
    splash: {
      __typename: "Splash",
      value: true,
    },
    counter: {
      __typename: "Counter",
      value: 1,
    }
  },
});

const domain = 'localhost'; // 'localhost' 192.168.1.229;
const protocol = 'http';
const port = 3543;

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink()]),
  // uri: protocol + '://' + domain + ':' + port + '/graphql',
});
