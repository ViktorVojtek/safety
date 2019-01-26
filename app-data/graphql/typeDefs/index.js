export default `
  input GpsCoordsInput {
    latitude: Float
    longitude: Float
  }

  type CategoryType {
    id: Int
    categoryType: String
    categoryName: String
  }

  type GpsCoordsType {
    latitude: Float
    longitude: Float
  }

  type SubCategoryType {
    id: Int
    subCategories: [CategoryType]
  }

  type Mutation {
    setGPSCoords(gpsCoords: GpsCoordsInput): GpsCoordsType
  }

  type Query {
    gps: GpsCoordsType
    getSubCagegory(id: Int!): [SubCategoryType]
    categories: [CategoryType]
  }
`;
