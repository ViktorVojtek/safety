import gql from 'graphql-tag';

export default gql`
  query GetCategories {
    categories @client {
      id
      categoryType
      categoryName
    }
  }
`;