import gql from 'graphql-tag';

export default {
  Query: {
    getCategory: (_, args, { cache }) => {
      const fragment = gql`
        fragment categoryItem on CategoryItem {
          id
          categoryName
          categoryType
        }
      `;
      const id = `CategoryItem:${args.id}`;
      const data = cache.readFragment({ fragment, id });

      return data;
    },
    getSubCategory: (_, args, { cache }) => {
      const fragment = gql`
        fragment subCategoryItem on SubCategoryItem {
          id
          categoryName
          categoryType
        }
      `;
      const id = `SubCategoryItem:${args.subCategoryId}`;
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
