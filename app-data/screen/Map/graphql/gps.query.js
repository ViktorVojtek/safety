import gql from 'graphql-tag';

export default gql`
  query {
    gps @client {
      longitude
      latitude
    }
  }
`;