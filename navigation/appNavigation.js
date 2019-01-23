import { createBottomTabNavigator } from "react-navigation";

import homeScreenNavigation from "../components/screens/homeScreen/homeScreenNavigation";
import MyMatchesNavigation from "../components/screens/myMatchesScreen/myMatchesNavigation";
import MatchFormNavigation from "../components/screens/matchForm/matchFormNavigation";
import NotificationsScreen from "../components/screens/notificationsScreen/notificationsScreen";
import SettingsScreen from "../components/screens/settingsScreen/settingsScreen";

const AppNavigation = createBottomTabNavigator({
  Home: { screen: homeScreenNavigation },
  "My Matches": { screen: MyMatchesNavigation },
  Scheduler: { screen: MatchFormNavigation },
  Notifications: { screen: NotificationsScreen },
  Settings: { screen: SettingsScreen }
});

export default AppNavigation;
