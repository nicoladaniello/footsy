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
    const { navigation } = this.props;

    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {this.state.dates.map((date, idx) => (
            <Tab key={idx} heading={date}>
              <Content>
                <MatchList
                  matches={this.state.matches[idx]}
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
          onPress={() => navigation.navigate("MatchForm")}
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
    const allMatches = matchesSvc.getMatches();
    let matches = new Array(7).fill(new Array(0));

    matches.forEach((el, idx) => {
      const idxDay = moment(new Date()).add(idx, "days");
      matches[idx] = allMatches.filter(m =>
        moment(m.eventDate).isSame(idxDay, "day")
      );
    });

    console.log(allMatches);
    console.log(matches);

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
