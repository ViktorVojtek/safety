import gql from 'graphql-tag';

export default gql`
  mutation setGPSCoords($gpsCoords: GpsCoordsInput) {
    setGPSCoords(gpsCoords: $gpsCoords) @client {
      latitude
      longitude
    }
  }
`;
