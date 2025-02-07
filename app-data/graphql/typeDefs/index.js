export default `
  input GpsCoordsInput {
    latitude: Float
    longitude: Float
  }

  innput ReportDataInput {
    categoryId: String
    subCategoryId: String
  }

  type DialNumberType {
    id: String
    dialNumberItem: String
    dialNumberItemTitle: String
    dialNumberItemType: String
  }

  type CategoryType {
    id: String
    categoryType: String
    categoryName: String
  }

  type CategoryWithSubCategoriesType {
    id: String
    categoryName
    subCategories: [SubCategoryType]
  }

  type GpsCoordsType {
    latitude: Float
    longitude: Float
  }

  type ReportDataType {
    categoryId: String
    subCategoryId: String
  }

  type SubCategoryType {
    id: String
    categoryName
    categoryType
  }

  type Mutation {
    setGPSDeviceCoords(gpsCoords: GpsCoordsInput): GpsCoordsType
    setReportData(reportData: ReportDataInput): ReportDataType
  }

  type Query {
    dialNumbers: [DialNumberType]
    gpsDevice: GpsCoordsType
    getCategory(id: String!): CategoryType
    getSubCategory(id: String!): SubCategoryType
    getSubCategories(id: String!): CategoryWithSubCategoriesType
    categories: [CategoryType]
    report: ReportDataType
  }
`;
