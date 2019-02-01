import gql from 'graphql-tag';

export default gql`
  query getSubCagegory($id: String!) {
    getSubCagegory(id: $id) @client {
      id
      subCategories @client {
        id
        categoryType
        categoryName
      }
    }
  }
`;
