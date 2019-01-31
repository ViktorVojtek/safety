import gql from 'graphql-tag';

export default gql`
  query GetReport {
    report @client {
      categoryId
      subCategoryId
      content
    }
  }
`;
