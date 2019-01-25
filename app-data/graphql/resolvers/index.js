import gql from 'graphql-tag';

export default {
  Query: {
    getSubCagegory: async (_, args, {cache, getCacheKey}) => {
      const cacheData = cache.readQuery({
        query: gql`
          query subCategories {
            subCategories @client {
              id
              categoryId
              categoryType
              categoryName
            }
          }
        `
      });

      console.log(cacheData);
      const {subCategories} = cacheData;
      console.log(subCategories);
      const data = subCategories.filter((item) => (item.categoryId === args.id));

      console.log(data);
      cache.writeData({data});

      return data;
    },
  },
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
