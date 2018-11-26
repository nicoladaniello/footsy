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
  List,
  Content
} from "native-base";
import moment from "moment";
import * as matchesSvc from "../../services/matchesService";
import AppMapImage from "../../common/gmaps-static-api/appMapImage";
import ScrollAnimationView from "../../common/headerScrollAnimation/scrollAnimationView";
import ScrollAnimationImage from "../../common/headerScrollAnimation/scrollAnimationImage";
import MatchMapScreen from "./matchMapScreen";
import AppFormItem from "../../common/formComponents/appFormItem";

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
      const data = await matchesSvc.getMatch(matchId);

      if (!data) return;

      this.props.navigation.setParams({
        title: moment(data.eventDate).fromNow()
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
              <AppFormItem
                active
                icon="map-marker"
                text={match.address.description}
              />
              <AppFormItem
                active
                icon="calendar-clock"
                text={moment(match.eventDate).format("ddd DD MMM YYYY")}
                note={`at ${moment(match.eventDate).format("hh:mm A")}`}
              />
              <AppFormItem
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
              <ListItem avatar>
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
              </ListItem>
              <AppFormItem
                active
                icon="payment"
                text={match.formattedPrice}
                note="22/22 partecipated"
              />

              <ListItem itemDivider />

              <AppFormItem active icon="share" text="Share" />
              <AppFormItem active icon="join" text="Join Game" />
            </List>
          }
        />
      </React.Fragment>
    );
  }
}
