import React from "react";
import {
  ListItem,
  Thumbnail,
  Badge,
  Text,
  Left,
  Body,
  Right,
  H3,
  View
} from "native-base";
import moment from "moment";

const MatchListItem = ({ match, handlePress }) => {
  return (
    <ListItem thumbnail onPress={handlePress}>
      <Left>
        <Thumbnail
          square
          source={{
            uri: match.organiser.img
          }}
        />
      </Left>
      <Body>
        <Text>
          {match.place}
          {/* {match.place} @ {moment(match.eventDate).format("hh:mm A")} */}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 2
          }}
        >
          <Badge primary>
            <Text style={{ fontSize: 12 }}>${match.price}</Text>
          </Badge>
          <Text note style={{ paddingLeft: 8 }}>
            {match.numberOfPlayers / 2} a side
          </Text>
        </View>
      </Body>
      <Right>
        <H3>6/7</H3>
      </Right>
    </ListItem>
  );
};

export default MatchListItem;
