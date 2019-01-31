import gql from 'graphql-tag';

export default gql`
  query GetCategory($id: Int!) {
    getCategory(id: $id) @client {
      id
      categoryName
      categoryType
    }
  }
`;
