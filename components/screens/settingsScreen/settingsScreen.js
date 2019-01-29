import React, { Component } from "react";
import { Container, Content, Text, Button } from "native-base";

import { signOut } from "../../../services/authService";

class SettingsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Content>
          <Text>Settings</Text>
          <Button onPress={this._googleSignOut}>
            <Text>Sign out</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _googleSignOut = () => {
    try {
      signOut();
      this.props.navigation.navigate("SignIn");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
}

export default SettingsScreen;
