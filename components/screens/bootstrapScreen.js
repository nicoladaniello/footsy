import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  View,
  Text
} from "react-native";

import { GoogleSignin, statusCodes } from "react-native-google-signin";

GoogleSignin.configure();

class BootstrapScreen extends Component {
  async componentWillMount() {
    try {
      const user = await GoogleSignin.signInSilently();
      this.props.navigation.navigate("App", { user });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.props.navigation.navigate("SignIn");
      } else {
        // some other error
        console.error(
          "Error in bootstrapScreen.componentWillMOunt():\nGoogleSignin.isSignedIn() exception:",
          ex
        );
      }
    }
  }

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

export default BootstrapScreen;
