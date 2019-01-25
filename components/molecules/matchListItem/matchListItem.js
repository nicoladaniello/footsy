import React from "react";
import {
  Thumbnail,
  Text,
  H3,
  View,
  ListItem,
  Left,
  Body,
  Right,
  Icon
} from "native-base";
import PropTypes from "prop-types";

import SpacesLeftPie from "../spacesLeftPie/spacesLeftPie";
import AppMatch from "../../../common/appMatch";

const MatchListItem = ({ match, onPress }) => {
  return (
    <ListItem matchItem onPress={onPress}>
      <Left>
        <Text sub center style={{ marginTop: 4 }}>
          {match.eventDate.format("hh:mm")}
          {"\n"}
          {match.eventDate.format("A")}
        </Text>
        <Text small>300m</Text>
      </Left>
      <Body>
        <View>
          <H3>
            {match.address.main_text}, {match.teamSize} a side
          </H3>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Icon
              small
              primary
              type="MaterialCommunityIcons"
              name="map-marker"
            />
            <Text sub>{match.address.secondary_text}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Thumbnail
            xSmall
            style={{ marginRight: 4 }}
            source={{ uri: match.organiser.image }}
          />
          <Text small>Organised by {match.organiser.fullName}</Text>
        </View>
      </Body>
      <Right>
        <SpacesLeftPie match={match} />
        <Text small>{match.formattedPrice}</Text>
      </Right>
    </ListItem>
  );
};

MatchListItem.propTypes = {
  match: PropTypes.instanceOf(AppMatch).isRequired,
  onPress: PropTypes.func.isRequired
};

export default MatchListItem;
