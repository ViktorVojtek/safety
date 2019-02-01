import gql from 'graphql-tag';

export default gql`
  query GetCategory($id: String!) {
    getCategory(id: $id) @client {
      id
      categoryName
      categoryType
    }
  }
`;
