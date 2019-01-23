import React, { Component } from "react";
import { Container } from "native-base";
import HomeScreenHeader from "./homeScreenHeader";
import HomeTabsBar from "../../organisms/homeTabsBar/homeTabsBar";

export default class HomeScreen extends Component {
  header = <HomeScreenHeader />;

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <HomeTabsBar
          onItemPress={id => navigation.navigate("Match", { matchId: id })}
        />
      </Container>
    );
  }
}
