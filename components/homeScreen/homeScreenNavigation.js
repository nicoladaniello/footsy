import { createStackNavigator } from "react-navigation";
import HomeScreen from "./homeScreen";
import MatchScreen from "../matchScreen/matchScreen";
import MatchForm from "../matchForm/matchForm";

const rootScreenNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Match: {
    screen: MatchScreen
  }
});

const homeScreenNavigation = createStackNavigator(
  {
    Root: {
      screen: rootScreenNavigation
    },
    MatchForm: {
      screen: MatchForm
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default homeScreenNavigation;
