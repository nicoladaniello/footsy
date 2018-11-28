import React, { Component } from "react";
import {
  ListItem,
  Left,
  Body,
  Button,
  Icon,
  Text,
  Thumbnail,
  Right,
  List
} from "native-base";
import * as matchesSvc from "../../services/matchesService";
import AppMapImage from "../../common/gmaps-static-api/appMapImage";
import ScrollAnimationView from "../../common/headerScrollAnimation/scrollAnimationView";
import ScrollAnimationImage from "../../common/headerScrollAnimation/scrollAnimationImage";
import MatchMapScreen from "./matchMapScreen";
import FormItem from "../../common/formComponents/formItem";
import ListPlayersItem from "../../common/listComponents/listPlayersItem";
import AppMatch from "../../common/appMatch";

export default class MatchScreen extends Component {
  state = { data: null, mapModalVisible: false };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Match")
    };
  };

  async componentWillMount() {
    try {
      const { navigation } = this.props;
      const matchId = navigation.getParam("matchId", "NO-ID");
      let data = await matchesSvc.getMatch(matchId);

      if (!data) return;

      data = new AppMatch(data);

      this.props.navigation.setParams({
        title: data.eventDate.fromNow()
      });
      this.setState({ data });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { data: match, mapModalVisible } = this.state;

    if (!match) return <Text>Not Found...</Text>;

    return (
      <React.Fragment>
        <MatchMapScreen
          match={match}
          visible={mapModalVisible}
          onClose={() => this.setState({ mapModalVisible: false })}
        />
        <ScrollAnimationView
          onPullDownDistance={() => this.setState({ mapModalVisible: true })}
          animationView={props => (
            <ScrollAnimationImage
              {...props}
              image={<AppMapImage match={match} />}
            />
          )}
          contentView={
            <List style={{ marginTop: 160, backgroundColor: "white" }}>
              <FormItem
                active
                icon="map-marker"
                text={match.address.description}
              />
              <FormItem
                active
                icon="calendar-clock"
                text={match.eventDate.format("ddd DD MMM YYYY")}
                note={`at ${match.eventDate.format("hh:mm A")}`}
              />
              <FormItem
                active
                icon="team"
                text={`${match.teamSize} a side`}
                note="22/22 partecipated"
              />

              <ListItem itemDivider />

              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{ uri: match.organiser.image }} />
                </Left>
                <Body>
                  <Text>Organised by {match.organiser.fullName}</Text>
                  <Text note>21 matches organised - 5 stars</Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon type="MaterialCommunityIcons" name="email-outline" />
                  </Button>
                </Right>
              </ListItem>
              {/* <ListItem avatar>
                <Left>
                  <Thumbnail small source={{ uri: match.organiser.image }} />
                </Left>
                <Body>
                  <Text>{match.numberOfPartecipants} Partecipants</Text>
                  <Text note>Filip, Mark and 19 others...</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem> */}
              <ListPlayersItem
                players={match.players}
                onPress={() => console.log("press")}
              />
              <FormItem
                active
                icon="payment"
                text={match.formattedPrice}
                note="22/22 partecipated"
              />

              <ListItem itemDivider />

              <FormItem active icon="share" text="Share" />
              <FormItem active icon="join" text="Join Game" />
            </List>
          }
        />
      </React.Fragment>
    );
  }
}
