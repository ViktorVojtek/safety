import gql from 'graphql-tag';

export default gql`
  query GetSubCategory($categoryId: Int!, $subCategoryId: Int!) {
    getSubCategory(categoryId: $categoryId, subCategoryId: $subCategoryId) @client {
      id
      categoryName
      categoryType
    }
  }
`;
