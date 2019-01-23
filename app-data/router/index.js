import React from 'react';
// import {Text, View} from 'react-native';
import BottomTabBar from '../shared/components/BottomTabBar';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

// AppStack
import HomeScreen from '../screen/Home';
import MapScreen from '../screen/Map';
import ReportScreen from '../screen/Report';
import SubCategory from '../screen/Report/components/SubCategory';

// AuthStack
import AuthLoadingScreen from '../screen/auth/Loading';
import RegisterScreen from '../screen/auth/Register';
import SignScreen from '../screen/auth/SignIn';
// import Splash from '../screen/Splash';

const HomeStack = createStackNavigator({Home: HomeScreen});
const MapStack = createStackNavigator({Map: MapScreen});
const ReportStack = createStackNavigator({
  Report: ReportScreen,
  SubCategory,
},{
  initialRouteName: 'Report',
});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Report: ReportStack,
  Map: MapStack,
}, {
  tabBarComponent: (props) => <BottomTabBar {...props} />,
});
const AuthStack = createStackNavigator({
  SignIn: SignScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'SignIn',
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
