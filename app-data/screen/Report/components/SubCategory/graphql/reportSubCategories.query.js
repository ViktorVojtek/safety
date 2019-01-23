import gql from 'graphql-tag';

export default gql`
  query GetReportSubCategories {
    reportSubCategories @client {
      subCategories {
        categoryId
        categoryType
        categoryName
      }
    }
  }
`;