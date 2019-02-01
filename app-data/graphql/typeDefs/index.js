export default `
  input GpsCoordsInput {
    latitude: Float
    longitude: Float
  }

  innput ReportDataInput {
    categoryId: String
    subCategoryId: String
    content: String
  } 

  type CategoryType {
    id: String
    categoryType: String
    categoryName: String
  }

  type GpsCoordsType {
    latitude: Float
    longitude: Float
  }

  type ReportDataType {
    categoryId: String
    subCategoryId: String
    content: String
  }

  type SubCategoryType {
    id: String
    categoryName
    categoryType
  }

  type Mutation {
    setGPSCoords(gpsCoords: GpsCoordsInput): GpsCoordsType
    setReportData(reportData: ReportDataInput): ReportDataType
  }

  type Query {
    gps: GpsCoordsType
    getCategory(id: String!): CategoryType
    getSubCategory(categoryId: String!, subCategoryId: String!): SubCategoryType
    categories: [CategoryType]
    report: ReportDataType
  }
`;
