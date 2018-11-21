import React from "react";
import { FlatList } from "react-native";
import MatchListItem from "./matchListItem";

const MatchList = ({ matches, handlePress }) => {
  return (
    <FlatList
      data={matches}
      renderItem={match => (
        <MatchListItem
          match={match.item}
          handlePress={() => handlePress(match.item._id)}
        />
      )}
    />
  );
};

export default MatchList;
