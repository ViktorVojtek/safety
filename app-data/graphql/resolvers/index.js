import gql from 'graphql-tag';

export default {
  Query: {
    getCategory: (_, args, { cache }) => {
      const { categories } = cache.readQuery({
        query: gql`
          query categories {
            categories @client {
              id
              categoryType
              categoryName
            }
          }
        `,
      });

      const category = categories.filter(item => item.id === args.id);

      return category[0];
    },
    getSubCategory: (_, args, { cache }) => {
      const { categories } = cache.readQuery({
        query: gql`
          query categories {
            categories @client {
              id
              subCategories {
                id
                categoryName
                categoryType
              }
            }
          }
        `,
      });
      const subCategories = categories.filter(item => item.id === args.categoryId);
      const subCategory = subCategories[0].subCategories.filter(
        item => item.id === args.subCategoryId,
      );

      return subCategory[0];
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
    setReportData: (_, { reportData }, { cache }) => {
      const { categoryId, subCategoryId, content } = reportData;
      const { report } = cache.readQuery({
        query: gql`
          query GetReport {
            report @client {
              categoryId
              subCategoryId
              content
            }
          }
        `,
      });
      const data = {
        report: {
          __typename: 'Report',
          categoryId: categoryId || report.categoryId,
          subCategoryId: subCategoryId || report.subCategoryId,
          content: content || report.content,
        },
      };

      cache.writeData({ data });

      return null;
    },
  },
};
