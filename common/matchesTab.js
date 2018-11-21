import React, { Component } from "react";
import { RefreshControl } from "react-native";
import { Content, Tab } from "native-base";
import MatchList from "./matchList/matchList";
import * as matchesSvc from "../services/matchesService";

class MatchesTab extends Component {
  state = {
    date: null,
    data: [],
    refreshing: false
  };

  constructor(props) {
    super(props);
    this.state.date = props.date;
  }

  componentWillMount() {
    this._loadMatches();
  }

  _loadMatches = async () => {
    try {
      this.setState({ refreshing: true });
      const data = await matchesSvc.getMatchesByDate(this.state.date);
      this.setState({ data, refreshing: false });
    } catch (ex) {
      console.error("Error loading the matches:", ex);
    }
  };

  render() {
    const { heading, data: matches } = this.state;
    const { handlePress } = this.props;

    return (
      <Tab heading={heading}>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._loadMatches}
            />
          }
        >
          <MatchList matches={matches} handlePress={id => handlePress(id)} />
        </Content>
      </Tab>
    );
  }
}

export default MatchesTab;
