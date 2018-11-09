import React from "react";

import { createDrawerNavigator } from "react-navigation";
import homeScreenNavigation from "../components/homeScreen/homeScreenNavigation";
import SideBar from "../components/sideBar/sideBar";
import MyMatchesScreen from "../components/myMatchesScreen/myMatchesScreen";
import NotificationsScreen from "../components/notificationsScreen/notificationsScreen";
import SettingsScreen from "../components/settingsScreen/settingsScreen";

const AppNavigation = createDrawerNavigator(
  {
    Home: { screen: homeScreenNavigation },
    "My Matches": { screen: MyMatchesScreen },
    Notifications: { screen: NotificationsScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default AppNavigation;
