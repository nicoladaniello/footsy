import { createStackNavigator } from "react-navigation";
import MatchForm from "./matchForm";
import GooglePlacesInput from "./matchAddressScreen";

const matchFormNavigation = createStackNavigator(
  {
    Home: {
      screen: MatchForm
    },
    SearchAddress: {
      screen: GooglePlacesInput
    }
  },
  {
    headerMode: "none"
  }
);

export default matchFormNavigation;
