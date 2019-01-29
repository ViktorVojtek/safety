import React from 'react';
// import {Text, View} from 'react-native';
import BottomTabBar from '../shared/components/BottomTabBar';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import DrawerNavigation from '../shared/components/DrawerNavigation';

// AppStack
import HomeScreen from '../screen/Home';
import MapScreen from '../screen/Map';
import QuickDialScreen from '../screen/QuickDial';
import ReportScreen from '../screen/Report';
import SubCategoryScreen from '../screen/Report/components/SubCategory';
import AddReportScreen from '../screen/Report/components/AddReport';

// AuthStack
import AuthLoadingScreen from '../screen/auth/Loading';
import RegisterScreen from '../screen/auth/Register';
import SignScreen from '../screen/auth/SignIn';
// import Splash from '../screen/Splash';

// Stack navigation
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  QuickDial: QuickDialScreen
}, {
  initialRouteName: 'Home'
});
const MapStack = createStackNavigator({
  Map: MapScreen,
  QuickDial: QuickDialScreen
}, {
  initialRouteName: 'Map'
});
const ReportStack = createStackNavigator({
  QuickDial: QuickDialScreen,
  Report: ReportScreen,
  SubCategory: SubCategoryScreen,
  AddReport: AddReportScreen
}, {
  initialRouteName: 'Report',
});

// Drawer navigation
const HomeDrawerStack = createDrawerNavigator({
  Home: HomeStack
}, {
  contentComponent: (props) => <DrawerNavigation {...props}  />,
  drawerPosition: 'right',
  initialRouteName: 'Home'
});
const MapDrawerStack = createDrawerNavigator({
  Map: MapStack
}, {
  contentComponent: (props) => <DrawerNavigation {...props}  />,
  drawerPosition: 'right',
  initialRouteName: 'Map'
});
const ReportDrawerStack = createDrawerNavigator({
  Report: ReportStack
}, {
  contentComponent: (props) => <DrawerNavigation {...props}  />,
  drawerPosition: 'right',
  initialRouteName: 'Report'
});

// Bottom navigation
const AppStack = createBottomTabNavigator({
  Home: HomeDrawerStack, // HomeStack,
  Report: ReportDrawerStack, // ReportStack,
  Map: MapDrawerStack // MapStack,
}, {
  tabBarComponent: (props) => <BottomTabBar {...props} />,
});
const AuthStack = createStackNavigator({
  SignIn: SignScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'SignIn'
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
