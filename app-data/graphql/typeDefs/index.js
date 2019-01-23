export default `
  input GpsCoordsInput {
    latitude: Float
    longitude: Float
  }

  type CategoryType {
    categoryId: Int
    categoryType: String
    categoryName: String
  }

  type GpsCoordsType {
    latitude: Float
    longitude: Float
  }

  type Mutation {
    setGPSCoords(gpsCoords: GpsCoordsInput): GpsCoordsType
  }

  type Query {
    gps: GpsCoordsType
    reportCategories: [CategoryType]
    reportSubCategories: [CategoryType]
  }
`;
