import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import DrawerNavigation from '../../shared/components/DrawerNavigation';
import AppTabs from '../BottomNavigation';
// import SafeZoneStack from '../StackNavigation';

const AppDrawer = createDrawerNavigator({
  AppTabs,
  // SafeZone: SafeZoneStack,
}, {
  contentComponent: props => <DrawerNavigation {...props} />,
  drawerPosition: 'right',
});

export default AppDrawer;
