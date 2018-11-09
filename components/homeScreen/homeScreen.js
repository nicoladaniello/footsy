import React, { Component } from "react";
import {
  Container,
  Tabs,
  ScrollableTab,
  Tab,
  Content,
  Fab,
  Icon,
  Button
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

  openDrawer() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {this.state.dates.map(d => (
            <Tab key={d} heading={d}>
              <Content>
                <MatchList matches={this.state.matches} filters />
              </Content>
            </Tab>
          ))}
        </Tabs>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </Container>
    );
  }

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
