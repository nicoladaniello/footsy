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
    dates: [],
    matches: []
  };

  componentWillMount() {
    this.populateDates();
    this.populateMatches();
  }

  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {this.state.dates.map(d => (
            <Tab key={d} heading={d}>
              <Content>
                <MatchList
                  matches={this.state.matches}
                  handlePress={id =>
                    this.props.navigation.navigate("Match", {
                      matchId: id
                    })
                  }
                  filters
                />
              </Content>
            </Tab>
          ))}
        </Tabs>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          onPress={() => this.props.navigation.navigate("MatchForm")}
        >
          <Icon name="share" />
        </Fab>
      </Container>
    );
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  populateMatches = () => {
    const matches = matchesSvc.getMatches();
    this.setState({ matches });
  };

  populateDates = () => {
    const dates = new Array(7).fill(moment()).map((d, i) =>
      moment(d)
        .add(i, "d")
        .format("ddd DD")
    );
    dates[0] = "Today";
    this.setState({ dates });
  };
}
