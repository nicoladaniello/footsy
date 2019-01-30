import React, { Component } from "react";
import { RefreshControl } from "react-native";
import { Content, Tab } from "native-base";
import PropTypes from "prop-types";
import moment from "moment";

import AppMatch from "../../../models/appMatch";
import MatchList from "../matchList/matchList";

import matchesSvc from "../../../services/matchService";

class HomeTab extends Component {
  constructor(props) {
    super(props);
    const date = props.date;
    const state = {
      date: date,
      data: [],
      refreshing: false
    };
    this.state = state;
  }

  componentWillMount() {
    this._loadMatches();
  }

  _loadMatches = async () => {
    try {
      this.setState({ refreshing: true });
      const data = (await matchesSvc.find()).map(m => new AppMatch(m));
      // q =>
      //   q.where("eventDate", ">=", this.state.date.valueOf())
      // )).map(m => new AppMatch(m));
      this.setState({ data, refreshing: false });
    } catch (ex) {
      console.error("HomeTab - Error loading the matches:", ex);
    }
  };

  render() {
    const { data: matches } = this.state;
    const { onItemPress } = this.props;

    return (
      <Tab>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._loadMatches}
            />
          }
        >
          <MatchList matches={matches} onItemPress={id => onItemPress(id)} />
        </Content>
      </Tab>
    );
  }
}

HomeTab.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  heading: PropTypes.any.isRequired,
  onItemPress: PropTypes.func.isRequired
};

export default HomeTab;
