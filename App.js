import React, { Component } from "react";
import { Container, Root, StyleProvider } from "native-base";
import SwitchNavigation from "./navigation/switchNavigation";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Root>
          <Container>
            <SwitchNavigation />
          </Container>
        </Root>
      </StyleProvider>
    );
  }
}
