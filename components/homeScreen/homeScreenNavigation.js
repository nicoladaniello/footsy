import { createStackNavigator } from "react-navigation";
import HomeScreen from "./homeScreen";
import matchFormNavigation from "../matchForm/matchFormNavigation";
import MatchScreenNavigation from "../matchScreen/matchScreenNavigation";

const rootScreenNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Match: {
    screen: MatchScreenNavigation,
    navigationOptions: {
      header: null
    }
  }
});

const homeScreenNavigation = createStackNavigator(
  {
    Root: {
      screen: rootScreenNavigation
    },
    MatchForm: {
      screen: matchFormNavigation
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default homeScreenNavigation;
