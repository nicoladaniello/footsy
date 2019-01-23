import { createSwitchNavigator } from "react-navigation";
import AppNavigation from "./appNavigation";
import BootstrapScreen from "../components/screens/bootstrapScreen";
import SignInScreen from "../components/screens/signInScreen";

const SwitchNavigation = createSwitchNavigator(
  {
    Bootstrap: BootstrapScreen,
    SignIn: SignInScreen,
    App: AppNavigation
  },
  {
    initialRouteName: "Bootstrap"
  }
);

export default SwitchNavigation;
