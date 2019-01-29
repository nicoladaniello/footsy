import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  View,
  Text
} from "react-native";

import { GoogleSignin, statusCodes } from "react-native-google-signin";
import firebase from "react-native-firebase";

GoogleSignin.configure();

class BootstrapScreen extends Component {
  subscription = null;

  async componentWillMount() {
    try {
      this.subscription = firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "App" : "SignIn", { user });
      });
    } catch (error) {
      console.error(error);
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription();
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
