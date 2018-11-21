import React, { Component } from "react";
import {
  Container,
  Tabs,
  ScrollableTab,
  Tab,
  Content,
  Fab,
  Icon
} from "native-base";
import moment from "moment";
import * as matchesSvc from "../../services/matchesService";
import AppHeader from "../../common/appHeader";
import MatchList from "../../common/matchList/matchList";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: props => <AppHeader {...props} />
  };

  state = {
    matches: {}
  };

  async componentWillMount() {
    await this.populateDates();
    await this.loadMatches(new Date());
  }

  render() {
    const { navigation } = this.props;
    const { matches } = this.state;

    return (
      <Container>
        <Tabs
          onChangeTab={tab => this.loadMatches(Object.keys(matches)[tab.i])}
          renderTabBar={() => <ScrollableTab />}
        >
          {Object.keys(matches).map(date => (
            <Tab
              key={date}
              heading={moment(date).format("ddd DD")}
              // onPress={this.loadMatches(date)}
            >
              <Content>
                <MatchList
                  matches={matches[date]}
                  handlePress={id =>
                    navigation.navigate("Match", { matchId: id })
                  }
                />
              </Content>
            </Tab>
          ))}
        </Tabs>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          onPress={() =>
            navigation.navigate("MatchForm", {
              newMatchPromise: this._handleNewMatch
            })
          }
        >
          <Icon name="share" />
        </Fab>
      </Container>
    );
  }

  populateDates = async () => {
    const matches = new Object();

    for (let i = 0; i < 7; i++) {
      const date = moment()
        .add(i, "days")
        .toDate();
      matches[date] = new Array();
    }

    await this.setState({ matches });
  };

  loadMatches = async date => {
    if (!this.state.matches[date] || this.state.matches[date].length) return;

    const data = await matchesSvc.getMatchesByDate(date);
    const matches = { ...this.state.matches };
    matches[date] = data;
    console.log(
      `matches found for date ${moment(date).format("ddd MM")}:`,
      matches[date]
    );
    this.setState({ matches });
  };

  _handleNewMatch = async promise => {
    try {
      const match = await promise;
      const matches = { ...this.state.matches };

      if (!matches[match.eventDate]) return;

      matches[match.eventDate].push(match);
      this.setState(matches);
    } catch (ex) {}
  };
}
