import React, { Component } from "react";
import { Container, Content } from "native-base";
import AppHeader from "../../common/appHeader";
import { getMatchesByCurrentUser } from "../../services/matchesService";
import MatchList from "../../common/matchList/matchList";

class MyMatchesScreen extends Component {
  state = {
    matches: []
  };

  async componentWillMount() {
    const matches = await getMatchesByCurrentUser();
    this.setState({ matches });
  }

  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <Content>
          <MatchList
            matches={this.state.matches}
            handlePress={id => navigation.navigate("Match", { matchId: id })}
          />
        </Content>
      </Container>
    );
  }
}

export default MyMatchesScreen;
