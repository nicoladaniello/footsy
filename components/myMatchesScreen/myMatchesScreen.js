import React, { Component } from "react";
import { RefreshControl } from "react-native";
import { Container, Content } from "native-base";
import * as userMatchesService from "../../services/userMatchesService";
import AppMatch from "../../common/appMatch";
import AppHeader from "../../common/appHeader";
import MatchList from "../../common/matchList/matchList";

class MyMatchesScreen extends Component {
  state = {
    matches: [],
    refreshing: false
  };

  componentWillMount() {
    this._loadMatches();
  }

  _loadMatches = async () => {
    try {
      this.setState({ refreshing: true });
      const matches = (await userMatchesService.getCurrentUserMatches()).map(
        m => new AppMatch(m)
      );
      console.log("my matches", matches);
      this.setState({ matches, refreshing: false });
    } catch (ex) {
      console.error("MyMatchesScreen - Error loading the matches:", ex);
    }
  };

  render() {
    const { matches, refreshing } = this.state;
    const { navigation } = this.props;

    return (
      <Container>
        <AppHeader {...this.props} />
        <Content
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._loadMatches}
            />
          }
        >
          <MatchList
            matches={matches}
            handlePress={id => navigation.navigate("Matches", { id })}
          />
        </Content>
      </Container>
    );
  }
}

export default MyMatchesScreen;
