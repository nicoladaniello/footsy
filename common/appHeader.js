import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            dark
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="md-menu" style={{ fontSize: 22 }} />
          </Button>
        </Left>
        <Body>
          <Title>Footsy</Title>
        </Body>
        <Right>
          <Button
            transparent
            dark
            onPress={() => this.props.navigation.navigate("Notifications")}
          >
            <Icon name="md-notifications" style={{ fontSize: 22 }} />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default AppHeader;
