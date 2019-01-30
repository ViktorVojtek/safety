import gql from 'graphql-tag';

export default gql`
  query GetGps {
    gps @client {
      latitude
      longitude
    }
  }
`;
