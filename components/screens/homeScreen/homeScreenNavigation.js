import { createStackNavigator } from "react-navigation";
import HomeScreen from "./homeScreen";
import MatchScreenNavigation from "../matchScreen/matchScreenNavigation";

const homeScreenNavigation = createStackNavigator({
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

export default homeScreenNavigation;
