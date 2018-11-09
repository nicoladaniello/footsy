import { createStackNavigator } from "react-navigation";
import HomeScreen from "./homeScreen";
import MatchScreen from "../matchScreen/matchScreen";

const homeScreenNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Match: {
    screen: MatchScreen
  }
});

export default homeScreenNavigation;
