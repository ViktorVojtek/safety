import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import BottomTabBar from '../../shared/components/BottomTabBar';
import {
  HomeStack,
  MapStack,
  ReportStack
} from '../StackNavigation';

export const AppTabs = createBottomTabNavigator({
  Home: HomeStack,
  Report: ReportStack, 
  Map: MapStack
}, {
  tabBarComponent: (props) => <BottomTabBar {...props} />,
});
