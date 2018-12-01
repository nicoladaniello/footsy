import React from "react";

import { createDrawerNavigator } from "react-navigation";
import homeScreenNavigation from "../components/homeScreen/homeScreenNavigation";
import SideBar from "../components/sideBar/sideBar";
import NotificationsScreen from "../components/notificationsScreen/notificationsScreen";
import SettingsScreen from "../components/settingsScreen/settingsScreen";
import MyMatchesNavigation from "../components/myMatchesScreen/myMatchesNavigation";

const AppNavigation = createDrawerNavigator(
  {
    Home: { screen: homeScreenNavigation },
    "My Matches": { screen: MyMatchesNavigation },
    Notifications: { screen: NotificationsScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default AppNavigation;
