import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from "moment";
import * as matchesSvc from "../../services/matchesService";

export default class MatchScreen extends Component {
  state = { data: {} };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Match")
    };
  };

  async componentWillMount() {
    try {
      const { navigation } = this.props;
      const matchId = navigation.getParam("matchId", "NO-ID");
      const data = await matchesSvc.getMatch(matchId);

      if (!data) return;

      this.props.navigation.setParams({ title: data.place });
      this.setState({ data });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { data: match } = this.state;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Match time: {moment(match.eventDate).fromNow()}</Text>
      </View>
    );
  }
}
