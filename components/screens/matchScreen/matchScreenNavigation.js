import { createStackNavigator } from "react-navigation";
import MatchScreen from "./matchScreen";
import MatchPlayersScreen from "./matchPlayersScreen";

const MatchScreenNavigation = createStackNavigator({
  Home: {
    screen: MatchScreen
  },
  Players: {
    screen: MatchPlayersScreen
  }
});

export default MatchScreenNavigation;
