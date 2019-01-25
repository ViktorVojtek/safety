import gql from 'graphql-tag';

export default gql`
  query getSubCagegory($id: Int!) {
    getSubCagegory(id: $id) @client {
      subCategories {
        id
        categoryId
        categoryType
        categoryName
      }
    }
  }
`;

/*gql`
  query GetReportSubCategories {
    reportSubCategories @client {
      subCategories {
        categoryId
        categoryType
        categoryName
      }
    }
  }
`;*/