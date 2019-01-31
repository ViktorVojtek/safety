export default `
  input GpsCoordsInput {
    latitude: Float
    longitude: Float
  }

  innput ReportDataInput {
    categoryId: Int
    subCategoryId: Int
    content: String
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

  type ReportDataType {
    categoryId: Int
    subCategoryId: Int
    content: String
  }

  type SubCategoryType {
    id: Int
    categoryName
    categoryType
  }

  type Mutation {
    setGPSCoords(gpsCoords: GpsCoordsInput): GpsCoordsType
    setReportData(reportData: ReportDataInput): ReportDataType
  }

  type Query {
    gps: GpsCoordsType
    getCategory(id: Int!): CategoryType
    getSubCategory(categoryId: Int!, subCategoryId: Int!): SubCategoryType
    categories: [CategoryType]
    report: ReportDataType
  }
`;
