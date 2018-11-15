import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  View,
  Text
} from "react-native";
import { getCurrentUser } from "../../services/authService";

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrap();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrap = async () => {
    try {
      await getCurrentUser();
      this.props.navigation.navigate("App");
    } catch (ex) {
      this.props.navigation.navigate("Anonym");
    }
  };

  // Render any loading content that you like here
  render() {
    const { height: screenHeight } = Dimensions.get("window");

    return (
      <View
        padder
        style={{
          flex: 1,
          height: screenHeight,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Loading...</Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
