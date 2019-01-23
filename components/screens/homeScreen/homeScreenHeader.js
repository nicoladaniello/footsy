import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";

class HomeScreenHeader extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body style={{ flexGrow: 5, alignItems: "center" }}>
          <Title>Footsy</Title>
        </Body>
        <Right>
          <Button
            transparent
            dark
            onPress={() => this.props.navigation.navigate("Notifications")}
          >
            <Icon name="md-search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HomeScreenHeader;
