import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";

import MatchListItem from "../../molecules/matchListItem/matchListItem";

const MatchList = ({ matches, onItemPress }) => {
  return (
    <FlatList
      data={matches}
      renderItem={match => (
        <MatchListItem
          match={match.item}
          onPress={() => onItemPress(match.item.id)}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired
};

export default MatchList;
