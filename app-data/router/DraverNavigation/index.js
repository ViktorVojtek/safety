import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import DrawerNavigation from '../../shared/components/DrawerNavigation';
import AppTabs from '../BottomNavigation';

const AppDrawer = createDrawerNavigator({
  AppTabs,
}, {
  contentComponent: props => <DrawerNavigation {...props} />,
  drawerPosition: 'right',
});

export default AppDrawer;
