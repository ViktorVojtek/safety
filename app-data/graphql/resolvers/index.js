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
      const id = `SubCategoryItem:${args.id}`;
      const data = cache.readFragment({ fragment, id });

      return data;
    },
    getSubCategories: (_, args, { cache }) => {
      const fragment = gql`
        fragment subCategories on CategoryItem {
          id
          categoryName
          subCategories {
            id
            categoryName
            categoryType
          }
        }
      `;
      const id = `CategoryItem:${args.id}`;
      const data = cache.readFragment({ fragment, id });

      return data;
    },
  },
  Mutation: {
    setGPSDeviceCoords: (_, { gpsCoords }, { cache }) => {
      const { latitude, longitude } = gpsCoords;
      const data = {
        gpsDevice: {
          __typename: 'GpsDevice',
          latitude,
          longitude,
        },
      };

      cache.writeData({ data });

      return null;
    },
    setGPSReportMarkerCoords: (_, { gpsCoords }, { cache }) => {
      const { latitude, longitude } = gpsCoords;
      const data = {
        gpsReportMarker: {
          __typename: 'GpsReportMarker',
          latitude,
          longitude,
        },
      };

      cache.writeData({ data });

      return null;
    },
    setReportData: (_, { reportData }, { cache }) => {
      const { categoryId, subCategoryId } = reportData;
      const { report } = cache.readQuery({
        query: gql`
          query GetReport {
            report @client {
              categoryId
              subCategoryId
            }
          }
        `,
      });
      const data = {
        report: {
          __typename: 'Report',
          categoryId: categoryId || report.categoryId,
          subCategoryId: subCategoryId || report.subCategoryId,
        },
      };

      cache.writeData({ data });

      return null;
    },
  },
};
