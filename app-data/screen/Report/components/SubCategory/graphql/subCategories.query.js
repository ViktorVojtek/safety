import gql from 'graphql-tag';

export default gql`
  query getSubCagegory($id: Int!) {
    getSubCagegory(id: $id) @client {
      id
      subCategories {
        id
        categoryType
        categoryName
      }
    }
  }
`;
