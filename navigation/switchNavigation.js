import { createSwitchNavigator } from "react-navigation";
import AppNavigation from "./appNavigation";
import AnonymNavigation from "./anonymNavigation";
import AuthLoadingScreen from "../components/authLoadingScreen/authLoadingScreen";

const SwitchNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigation,
    Anonym: AnonymNavigation
  },
  {
    initialRouteName: "App" //AuthLoading"
  }
);

export default SwitchNavigation;
