import React from "react";
import {
  ListItem,
  Thumbnail,
  Badge,
  Text,
  Left,
  Body,
  Right,
  View
} from "native-base";
import moment from "moment";

const MatchListItem = ({ match, handlePress }) => {
  return (
    <ListItem thumbnail onPress={handlePress}>
      <Left>
        <Text note style={{ textAlign: "center" }}>
          {moment(match.eventDate).format("hh:mm")}
          {"\n"}
          {moment(match.eventDate).format("A")}
        </Text>
      </Left>
      <Body>
        <Text>{match.address.description}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 2,
            marginBottom: 8
          }}
        >
          <Text note>{match.teamSize} a side</Text>
          <Text primary style={{ fontSize: 14, marginLeft: 8 }}>
            - ${match.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Thumbnail
            style={{ width: 28, height: 28, borderRadius: 14 }}
            source={{ uri: match.organiser.img }}
          />
          <Text note> Organised by {match.organiser.name}</Text>
        </View>
      </Body>
      <Right>
        <Badge primary>
          <Text>5 / {match.teamSize}</Text>
        </Badge>
      </Right>
    </ListItem>
  );
};

export default MatchListItem;
