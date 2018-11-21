import React, { Component } from "react";
import { Container, Tabs, ScrollableTab, Fab, Icon } from "native-base";
import moment from "moment";
import AppHeader from "../../common/appHeader";
import MatchesTab from "../../common/matchesTab";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: props => <AppHeader {...props} />
  };

  state = {
    dates: []
  };

  componentWillMount() {
    this._populateDates();
  }

  _populateDates = () => {
    const dates = new Array(7).fill(new Date()).map((d, i) =>
      moment(d)
        .add(i, "days")
        .toDate()
    );
    this.setState({ dates });
  };

  render() {
    const { navigation } = this.props;
    const { dates } = this.state;

    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {dates.map(date => (
            <MatchesTab
              key={date}
              date={date}
              heading={moment(date).format("ddd DD")}
            />
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
}
