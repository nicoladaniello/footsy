import { createStackNavigator } from "react-navigation";
import MatchScreen from "../matchScreen/matchScreen";
import MatchPlayersScreen from "./matchPlayersScreen";
import { Button } from "native-base";

const MatchScreenNavigation = createStackNavigator({
  Home: {
    screen: MatchScreen
  },
  Players: {
    screen: MatchPlayersScreen
  }
});

export default MatchScreenNavigation;
