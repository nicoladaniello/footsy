import React, { Component } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  View,
  Text
} from "react-native";
import { getCurrentUser } from "../../services/authService";

class BootstrapScreen extends Component {
  async componentWillMount() {
    try {
      const user = await getCurrentUser();

      if (!user) return this.props.navigation.navigate("SignIn");
      this.props.navigation.navigate("App", { user });
    } catch (ex) {
      console.error(ex);
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
