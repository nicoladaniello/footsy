import { createStackNavigator } from "react-navigation";
import MatchScreenNavigation from "../matchScreen/matchScreenNavigation";
import MyMatchesScreen from "./myMatchesScreen";

const MyMatchesNavigation = createStackNavigator({
  Home: {
    screen: MyMatchesScreen
  },
  Match: {
    screen: MatchScreenNavigation,
    navigationOptions: {
      header: null
    }
  }
});

export default MyMatchesNavigation;
