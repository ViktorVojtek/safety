import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import AuthLoadingScreen from '../screen/auth/Loading';
import { AuthStack } from './StackNavigation';
import AppDrawer from './DraverNavigation';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawer,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
));
