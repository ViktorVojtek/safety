import gql from 'graphql-tag';

export default gql`
  query GetSubCategory($categoryId: String!, $subCategoryId: String!) {
    getSubCategory(categoryId: $categoryId, subCategoryId: $subCategoryId) @client {
      id
      categoryName
      categoryType
    }
  }
`;
