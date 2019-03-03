import gql from 'graphql-tag';

const newNotificationSub = gql`
  subscription {
    newNotification {
      label
    }
  }
`;

export default newNotificationSub;
