import gql from 'graphql-tag';

export default gql`
  mutation setReportData($reportData: ReportDataInput) {
    setReportData(reportData: $reportData) @client {
      categoryId
      subCategoryId
      content
    }
  }
`;
