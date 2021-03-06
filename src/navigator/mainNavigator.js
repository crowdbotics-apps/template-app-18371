import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile70363Navigator from '../features/UserProfile70363/navigator';
import Tutorial70362Navigator from '../features/Tutorial70362/navigator';
import NotificationList70334Navigator from '../features/NotificationList70334/navigator';
import Settings70333Navigator from '../features/Settings70333/navigator';
import Settings70325Navigator from '../features/Settings70325/navigator';
import UserProfile70323Navigator from '../features/UserProfile70323/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile70363: { screen: UserProfile70363Navigator },
Tutorial70362: { screen: Tutorial70362Navigator },
NotificationList70334: { screen: NotificationList70334Navigator },
Settings70333: { screen: Settings70333Navigator },
Settings70325: { screen: Settings70325Navigator },
UserProfile70323: { screen: UserProfile70323Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
