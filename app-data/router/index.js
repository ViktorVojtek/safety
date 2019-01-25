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

// AuthStack
import AuthLoadingScreen from '../screen/auth/Loading';
import RegisterScreen from '../screen/auth/Register';
import SignScreen from '../screen/auth/SignIn';
// import Splash from '../screen/Splash';

// DrawerStack
import SettingsScreen from '../screen/Settings';

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
  SubCategory: SubCategoryScreen
}, {
  initialRouteName: 'Report',
});

// Drawer navigation
const HomeDrawerStack = createDrawerNavigator({
  Home: HomeStack,
  Settings: SettingsScreen
}, {
  contentComponent: () => <DrawerNavigation />,
  drawerPosition: 'right',
  initialRouteName: 'Home'
});

// Bottom navigation
const AppStack = createBottomTabNavigator({
  Home: HomeDrawerStack, // HomeStack,
  Report: ReportStack,
  Map: MapStack,
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
