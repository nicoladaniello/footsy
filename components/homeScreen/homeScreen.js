import React, { Component } from "react";
import {
  Container,
  Tabs,
  List,
  ScrollableTab,
  Tab,
  Content,
  Fab,
  Icon,
  Button,
  ListItem,
  Left
} from "native-base";
import moment from "moment";
import * as matchesSvc from "../../services/matchesService";
import MatchListItem from "../../common/matchListItem";
import AppHeader from "../../common/appHeader";

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
    console.log("Opened");
    this.props.navigation.openDrawer();
  }

  render() {
    const filtersItem = (
      <ListItem>
        <Left>
          <Button transparent>
            <Icon name="md-search" />
          </Button>
        </Left>
      </ListItem>
    );

    const matchesList = this.state.matches.map(m => (
      <MatchListItem
        key={m._id}
        match={m}
        handlePress={() =>
          this.props.navigation.navigate("Match", {
            matchId: m._id
          })
        }
      />
    ));

    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {this.state.dates.map(d => (
            <Tab key={d} heading={d}>
              <Content>
                <List>
                  {filtersItem}
                  {matchesList}
                </List>
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
