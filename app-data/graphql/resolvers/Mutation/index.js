import gql from 'graphql-tag';

export default {
  Mutation: {
    setGPSCoords: (_, {gpsCoords}, {cache}) => {
      const {latitude, longitude} = gpsCoords;
      const {gps} = cache.readQuery({
        query: gql`
          query GetGps {
            gps @client {
              latitude
              longitude
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
  },
};
