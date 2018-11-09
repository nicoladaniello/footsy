import { createStackNavigator } from "react-navigation";
import SignInScreen from "../components/signInScreen";

const AnonymNavigation = createStackNavigator(
  {
    Login: { screen: SignInScreen }
  },
  {
    headerMode: "none"
  }
);

export default AnonymNavigation;
