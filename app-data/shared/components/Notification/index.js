import React from 'react';
import { View } from 'react-native';

export default children => (
  <View style={{ borderColor: 'red', borderWidth: 1 }}>{children}</View>
);
