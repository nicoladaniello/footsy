import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import AppHeader from "../../common/appHeader";

class SettingsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
