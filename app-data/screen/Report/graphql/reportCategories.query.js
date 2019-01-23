import gql from 'graphql-tag';

export default gql`
  query GetReportCategories {
    reportCategories @client {
      categories {
        categoryId
        categoryType
        categoryName
      }
    }
  }
`;