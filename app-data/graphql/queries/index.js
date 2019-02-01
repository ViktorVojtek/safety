import gql from 'graphql-tag';

export const getCategoryQuery = gql`
  query GetCategory($id: String!) {
    getCategory(id: $id) @client {
      id
      categoryName
      categoryType
    }
  }
`;

export const getCategoriesQuery = gql`
  query GetCategories {
    categories @client {
      id
      categoryType
      categoryName
      subCategories @ client {
        id
        categoryType
        categoryName
      }
    }
  }
`;

export const getGpsQuery = gql`
  query GetGps {
    gps @client {
      latitude
      longitude
    }
  }
`;

export const getSubCategoryQuery = gql`
  query GetSubCategory($id: String!) {
    getSubCategory(id: $id) @client {
      id
      categoryName
      categoryType
    }
  }
`;

export const getSubCategoriesQuery = gql`
  query getSubCategories($id: String!) {
    getSubCategories(id: $id) @client {
      id
      categoryName
      subCategories {
        id
        categoryName
        categoryType
      }
    }
  }
`;

export const reportQuery = gql`
  query GetReport {
    report @client {
      categoryId
      subCategoryId
    }
  }
`;