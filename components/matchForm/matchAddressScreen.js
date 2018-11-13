import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon, Button } from "native-base";
import { MapsOptions } from "../../enviroment";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

const GooglePlacesInput = props => {
  onAddressSelect = (data, details) => {
    props.navigation.state.params.handleAddressPicker(data, details);
    props.navigation.goBack();
  };

  return (
    <GooglePlacesAutocomplete
      placeholder="Address"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed="auto" // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        onAddressSelect(data, details);
      }}
      getDefaultValue={() => ""}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: MapsOptions.publicKey,
        language: MapsOptions.language, // language of the results
        types: MapsOptions.types, // default: 'geocode'
        components: MapsOptions.components
      }}
      styles={{
        textInputContainer: {
          width: "100%"
        },
        description: {
          fontWeight: "bold"
        },
        predefinedPlacesDescription: {
          color: "#1faadb"
        }
      }}
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: "distance",
        types: "food"
      }}
      //   predefinedPlaces={[homePlace, workPlace]}
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={() => (
        <Button transparent onPress={() => props.navigation.goBack()}>
          <Icon name="ios-arrow-back" />
        </Button>
      )}
      //   renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
};

export default GooglePlacesInput;
