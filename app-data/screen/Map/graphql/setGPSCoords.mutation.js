import gql from 'graphql-tag';

export default gql`
  mutation setGPSCoords($longitude: Float, $latitude: Float) {
    setGPSCoords(longitude: $longitude, latitude: $latitude) @client {
      longitude
      latitude
    }
  }
`;