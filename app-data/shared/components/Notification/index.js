// import React from 'react';
import { graphql } from 'react-apollo';
// import { View } from 'react-native';
import newNotificationSub from '../../../graphql/subscriptions';

export default graphql(newNotificationSub)((props) => {
  console.log(props);
  const { data: { newNotification } } = props;

  return newNotification ? alert(newNotification.label) : null;
});
