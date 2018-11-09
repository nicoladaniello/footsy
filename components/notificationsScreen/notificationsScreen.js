import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import AppHeader from "../../common/appHeader";

class NotificationsScreen extends Component {
  state = {};
  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <Content>
          <Text>Notifications</Text>
        </Content>
      </Container>
    );
  }
}

export default NotificationsScreen;
