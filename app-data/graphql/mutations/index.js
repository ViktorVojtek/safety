import gql from 'graphql-tag';

export const createReportMutation = gql`
  mutation createReport($report: ReportInput) {
    createReport(report: $report) {
      id
      address
      categoryId
      description
      image {
        id
        data
      }
      gpsCoords {
        latitude
        longitude
      }
      subCategoryId
      userId
      dateCreated
    }
  }
`;

export const createUserMutation = gql`
  mutation createUser($user: UserInput) {
    createUser(user: $user) {
      id
    }
  }
`;

export const loginUserMutation = gql`
  mutation loginUser($user: UserLoginInput) {
    loginUser(user: $user) {
      confirmed
      firstName
      id
      jwt
      lastName
      role
    }
  }
`;

export const setReportDataMutation = gql`
  mutation setReportData($reportData: ReportDataInput) {
    setReportData(reportData: $reportData) @client {
      categoryId
      subCategoryId
    }
  }
`;

export const setGpsDeviceMutation = gql`
  mutation setGPSDeviceCoords($gpsCoords: GpsCoordsInput) {
    setGPSDeviceCoords(gpsCoords: $gpsCoords) @client {
      latitude
      longitude
    }
  }
`;

/* export const setGpsReportMarkerMutation = gql`
  mutation setGPSReportMarkerCoords($gpsCoords: GpsCoordsInput) {
    setGPSReportMarkerCoords(gpsCoords: $gpsCoords) @client {
      latitude
      longitude
    }
  }
`; */
