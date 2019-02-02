import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screen/Home';
import MapScreen from '../../screen/Map';
import QuickDialScreen from '../../screen/QuickDial';
import ReportScreen from '../../screen/Report';
import ReportDetailScreen from '../../screen/Home/components/ReportDetail';
import SubCategoryScreen from '../../screen/Report/components/SubCategory';
import AddReportScreen from '../../screen/Report/components/AddReport';
import RegisterScreen from '../../screen/auth/Register';
import SignScreen from '../../screen/auth/SignIn';

export const AuthStack = createStackNavigator({
  SignIn: SignScreen,
  Register: RegisterScreen,
}, {
  initialRouteName: 'SignIn',
});

export const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ReportDetail: ReportDetailScreen,
  QuickDial: QuickDialScreen,
}, {
  initialRouteName: 'Home',
});

export const MapStack = createStackNavigator({
  Map: MapScreen,
  QuickDial: QuickDialScreen,
}, {
  initialRouteName: 'Map',
});

export const ReportStack = createStackNavigator({
  QuickDial: QuickDialScreen,
  Report: ReportScreen,
  SubCategory: SubCategoryScreen,
  AddReport: AddReportScreen,
}, {
  initialRouteName: 'Report',
});
