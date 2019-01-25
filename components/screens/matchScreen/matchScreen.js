import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { Button, Text, List, Spinner } from "native-base";

import * as matchesSvc from "../../../services/matchesService";

import MapStaticImage from "../../molecules/mapStaticImage/mapStaticImage";
import ScrollAnimationView from "../../organisms/headerScrollAnimation/scrollAnimationView";
import ScrollAnimationImage from "../../organisms/headerScrollAnimation/scrollAnimationImage";
import MatchMapScreen from "./matchMapScreen";
import AppMatch from "../../../common/appMatch";
import MatchHeader from "../../molecules/matchHeader/matchHeader";
import MatchItem from "../../molecules/matchItem/matchItem";
import { formatTextUsers } from "../../../utils/textFormatter/textFormatter";
import Icon from "../../atoms/icon/Icon";

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
          <Icon name="chevron-left" />
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
              image={<MapStaticImage match={match} />}
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
                type="directions"
                icon="map-marker"
                title={match.address.secondary_text}
              />
              {/* End Address */}

              {/* Team Size */}
              <MatchItem
                icon="team"
                title={`${match.teamSize} a side`}
                subtitle="22/22 partecipated"
              />
              {/* End Team Size */}

              {/* Organiser */}
              <MatchItem
                type="more"
                avatar={{ uri: match.organiser.image }}
                title={`Organised by ${match.organiser.fullName}`}
                subtitle={`21 matches organised - 5 stars`}
              />
              {/* End Organiser */}

              {/* Partecipants List */}
              <MatchItem
                type="nav"
                icon="add-players"
                title={`${match.players.length} partecipants`}
                subtitle={formatTextUsers(match.players)}
                onPress={() =>
                  navigation.navigate("Players", { players: match.players })
                }
              />
              {/* End Partecipants List */}

              {/* Price */}
              <MatchItem icon="payment" title={match.formattedPrice} />
              {/* End Price */}

              <MatchItem icon="share" title="Share" />
              <MatchItem icon="join" title="Join Game" />
            </List>
          }
        />
      </React.Fragment>
    );
  }
}
