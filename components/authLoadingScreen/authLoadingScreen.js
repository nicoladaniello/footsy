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
  async componentWillMount() {
    try {
      await getCurrentUser();
      this.props.navigation.navigate("App");
    } catch (ex) {
      this.props.navigation.navigate("Anonym");
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

export default AuthLoadingScreen;
