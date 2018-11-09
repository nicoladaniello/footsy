import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import AppHeader from "../../common/appHeader";

class MyMatchesScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <Content>
          <Text>My Matches</Text>
        </Content>
      </Container>
    );
  }
}

export default MyMatchesScreen;
