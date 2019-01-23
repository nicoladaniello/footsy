import React from "react";
import { TouchableOpacity } from "react-native";
import { Thumbnail, Text, View } from "native-base";
import PropTypes from "prop-types";

import style from "../../../assets/styles/matchItemStyle";
import { textStyles } from "../../../assets/styles/styles";
import SpacesLeftPie from "../../../common/spacesLeftPie/spacesLeftPie";
import AppMatch from "../../../common/appMatch";

const MatchListItem = ({ match, onPress }) => {
  return (
    <TouchableOpacity style={style.Item} onPress={onPress}>
      <View style={style.left}>
        <Text style={style.leftTitle}>
          {match.eventDate.format("hh:mm")}
          {"\n"}
          {match.eventDate.format("A")}
        </Text>
        <Text note style={style.leftSubtitle}>
          300m
        </Text>
      </View>
      <View style={style.body}>
        <Text style={textStyles.h4}>
          {match.address.main_text}, {match.teamSize} a side
        </Text>
        <Text style={textStyles.body2}>{match.address.secondary_text}</Text>
        <View style={style.organiser}>
          <Thumbnail
            style={{ width: 16, height: 16, borderRadius: 8, marginRight: 4 }}
            source={{ uri: match.organiser.image }}
          />
          <Text style={textStyles.small}>
            Organised by {match.organiser.fullName}
          </Text>
        </View>
      </View>
      <View style={style.right}>
        <SpacesLeftPie match={match} />
        <Text style={style.rightSubtitle}>{match.formattedPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

MatchListItem.propTypes = {
  match: PropTypes.instanceOf(AppMatch).isRequired,
  onPress: PropTypes.func.isRequired
};

export default MatchListItem;
