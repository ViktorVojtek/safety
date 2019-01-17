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

// AuthStack
import AuthLoadingScreen from '../screen/auth/Loading';
import SignScreen from '../screen/auth/SignIn';
import Splash from '../screen/Splash';

const HomeStack = createStackNavigator({Home: HomeScreen});
const MapStack = createStackNavigator({Map: MapScreen});
const ReportStack = createStackNavigator({Report: ReportScreen});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Report: ReportStack,
  Map: MapStack,
}, {
  tabBarComponent: (props) => <BottomTabBar {...props} />,
});
const AuthStack = createStackNavigator({SignIn: SignScreen});

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
