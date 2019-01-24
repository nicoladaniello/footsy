import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
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
  Spinner
} from "native-base";
import * as matchesSvc from "../../../services/matchesService";
import AppMapImage from "../../../common/gmaps-static-api/appMapImage";
import ScrollAnimationView from "../../../common/headerScrollAnimation/scrollAnimationView";
import ScrollAnimationImage from "../../../common/headerScrollAnimation/scrollAnimationImage";
import MatchMapScreen from "./matchMapScreen";
import FormItem from "../../../common/formComponents/formItem";
import ListPlayersItem from "../../../common/listComponents/listPlayersItem";
import AppMatch from "../../../common/appMatch";
import MatchHeader from "../../molecules/matchHeader/matchHeader";
import MatchItem from "../../molecules/matchItem/matchItem";

export default class MatchScreen extends Component {
  state = { data: null, mapModalVisible: false, loading: true };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Match"),
      headerLeft: (
        <Button
          transparent
          onPress={() => navigation.dispatch(NavigationActions.back())}
        >
          <Icon type="MaterialCommunityIcons" name="chevron-left" />
        </Button>
      )
    };
  };

  async componentWillMount() {
    try {
      const { navigation } = this.props;
      const matchId = navigation.getParam("matchId", "NO-ID");
      let data = await matchesSvc.getMatch(matchId);

      if (!data) return this.setState({ loading: false });

      data = new AppMatch(data);

      this.props.navigation.setParams({
        title: data.eventDate.fromNow()
      });
      this.setState({ data, loading: false });
    } catch (ex) {
      console.error(ex);
    }
  }

  render() {
    const { data: match, mapModalVisible, loading } = this.state;
    const { navigation } = this.props;

    if (loading) return <Spinner />;
    if (!match) return <Text>Not found...</Text>;

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
            <List
              style={{
                marginTop: 160,
                paddingTop: 8,
                backgroundColor: "white",
                borderRadius: 16
              }}
            >
              {/* Header */}
              <MatchHeader
                title={`Match in ${match.address.main_text}`}
                subtitle={match.eventDate.format("dddd DD MMMM YYYY - hh:mm A")}
              />
              {/* End Header */}

              {/* Address */}
              <MatchItem
                icon="map-marker"
                title={match.address.secondary_text}
              />
              {/* End Address */}

              {/* Organiser */}
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={{ uri: match.organiser.image }} />
                </Left>
                <Body>
                  <Text>Organised by {match.organiser.fullName}</Text>
                  <Text note>21 matches organised - 5 stars</Text>
                </Body>
                <Right>
                  <Icon
                    small
                    type="MaterialCommunityIcons"
                    name="email-outline"
                  />
                </Right>
              </ListItem>
              {/* End Organiser */}

              {/* Partecipants List */}
              <ListPlayersItem
                players={match.players}
                onPress={() =>
                  navigation.navigate("Players", { players: match.players })
                }
              />
              {/* End Partecipants List */}

              {/* Team Size */}
              <FormItem
                icon="team"
                text={`${match.teamSize} a side`}
                note="22/22 partecipated"
              />
              {/* End Team Size */}

              {/* Price */}
              <FormItem icon="payment" text={match.formattedPrice} />
              {/* End Price */}

              <FormItem icon="share" text="Share" />
              <FormItem icon="join" text="Join Game" />
            </List>
          }
        />
      </React.Fragment>
    );
  }
}
