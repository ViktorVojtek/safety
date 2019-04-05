import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import BottomTabBar from '../../shared/components/BottomTabBar';
import {
  HomeStack,
  MapStack,
  ReportStack,
  // SafeZoneStack,
} from '../StackNavigation';
// import Notification from '../../shared/components/Notification';

const AppTabs = createBottomTabNavigator({
  Home: HomeStack,
  Report: ReportStack,
  Map: MapStack,
  // SafeZone: SafeZoneStack,
}, {
  initialRouteName: 'Home',
  tabBarComponent: props => <BottomTabBar {...props} />,
});

export default AppTabs;
