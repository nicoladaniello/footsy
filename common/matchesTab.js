import React, { Component } from "react";
import { Content, Tab } from "native-base";
import MatchList from "./matchList/matchList";
import * as matchesSvc from "../services/matchesService";

class MatchesTab extends Component {
  state = { date: null, data: [] };

  constructor(props) {
    super(props);

    this.state.date = props.date;
    this.loadMatches();
  }

  render() {
    const { date, heading, data: matches } = this.state;

    return (
      <Tab heading={heading}>
        <Content>
          <MatchList
            matches={matches}
            handlePress={id => navigation.navigate("Match", { matchId: id })}
          />
        </Content>
      </Tab>
    );
  }

  loadMatches = async () => {
    if (!this.state.data || this.state.data.length) return;

    const data = await matchesSvc.getMatchesByDate(this.state.date);
    this.setState({ data });
  };
}

export default MatchesTab;
