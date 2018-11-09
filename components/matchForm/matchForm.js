import React, { Component } from "react";
import { Content, Item, Input, Container, Button, Text } from "native-base";

class MatchForm extends Component {
  render() {
    return (
      <Container style={{ marginTop: 22 }}>
        <Content>
          <Item>
            <Input placeholder="Underline Textbox" />
          </Item>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Dismiss</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default MatchForm;
