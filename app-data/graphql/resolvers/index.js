import gql from 'graphql-tag';

export default {
  Query: {
    getSubCagegory: async (_, args, { cache }) => {
      const fragment = gql`
        fragment categoryItem on CategoryItem {
          id
          subCategories {
            id
            categoryType
            categoryName
          }
        }
      `;
      const id = `CategoryItem:${args.id}`;
      const data = cache.readFragment({ fragment, id });

      return data;
    },
  },
  Mutation: {
    setGPSCoords: (_, { gpsCoords }, { cache }) => {
      const { latitude, longitude } = gpsCoords;
      const data = {
        gps: {
          __typename: 'Gps',
          latitude,
          longitude,
        },
      };

      cache.writeData({ data });

      return null;
    },
  },
};
