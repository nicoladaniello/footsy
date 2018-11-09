import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="md-menu" />
          </Button>
        </Left>
        <Body>
          <Title>Footsy</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Notifications")}
          >
            <Icon name="md-notifications" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default AppHeader;
