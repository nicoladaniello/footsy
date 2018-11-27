import { createStackNavigator } from "react-navigation";
import MatchForm from "./matchForm";
import GooglePlacesInput from "./matchAddressScreen";
import PlayersPickerScreen from "./playersPickerScreen";

const matchFormNavigation = createStackNavigator(
  {
    Home: {
      screen: MatchForm
    },
    SearchAddress: {
      screen: GooglePlacesInput
    },
    AddPlayers: {
      screen: PlayersPickerScreen
    }
  },
  {
    headerMode: "none"
  }
);

export default matchFormNavigation;
