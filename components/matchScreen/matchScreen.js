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
import moment from "moment";
import * as matchesSvc from "../../services/matchesService";
import AppMapImage from "../../common/gmaps-static-api/appMapImage";
import ScrollAnimationView from "../../common/headerScrollAnimation/scrollAnimationView";
import ScrollAnimationImage from "../../common/headerScrollAnimation/scrollAnimationImage";
import AppMapModal from "../../common/appMapModal";

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
        <AppMapModal
          match={match}
          visible={mapModalVisible}
          onClose={() => this.setState({ mapModalVisible: false })}
        />
        <ScrollAnimationView
          handleRelease={() => this.setState({ mapModalVisible: true })}
          animationView={props => (
            <ScrollAnimationImage
              {...props}
              image={<AppMapImage match={match} />}
            />
          )}
          contentView={
            <List style={{ marginTop: 120, backgroundColor: "white" }}>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#FF9501" }}>
                    <Icon
                      active
                      type="MaterialCommunityIcons"
                      name="map-marker"
                    />
                  </Button>
                </Left>
                <Body>
                  <Text>{match.address.description}</Text>
                </Body>
                <Right />
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "blue" }}>
                    <Icon
                      active
                      type="MaterialCommunityIcons"
                      name="calendar-clock"
                    />
                  </Button>
                </Left>
                <Body>
                  <Text>
                    {moment(match.eventDate).format("ddd DD MMM YYYY")}
                  </Text>
                </Body>
                <Right>
                  <Text>{moment(match.eventDate).format("hh:mm")}</Text>
                </Right>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "yellow" }}>
                    <Icon active name="md-shirt" />
                  </Button>
                </Left>
                <Body>
                  <Text>{match.teamSize} a side</Text>
                  <Text note>22/22 partecipated</Text>
                </Body>
                <Right />
              </ListItem>

              <ListItem itemDivider />

              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{ uri: match.organiser.img }} />
                </Left>
                <Body>
                  <Text>Organised by {match.organiser.name}</Text>
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
                  <Thumbnail small source={{ uri: match.organiser.img }} />
                </Left>
                <Body>
                  <Text>22 Partecipated</Text>
                  <Text note>Filip, Mark and 19 others...</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>

              <ListItem itemDivider />

              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "blue" }}>
                    <Icon
                      active
                      type="MaterialCommunityIcons"
                      name="credit-card"
                    />
                  </Button>
                </Left>
                <Body>
                  <Text>${match.price}</Text>
                </Body>
                <Right />
              </ListItem>
            </List>
          }
        />
      </React.Fragment>
    );
  }
}
