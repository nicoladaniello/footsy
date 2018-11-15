import React from "react";
import { List } from "native-base";
import MatchListItem from "./matchListItem";

const MatchList = ({ matches, handlePress }) => {
  return (
    <List>
      {matches.map(m => {
        return (
          <MatchListItem
            key={m._id}
            match={m}
            handlePress={() => handlePress(m._id)}
          />
        );
      })}
    </List>
  );
};

export default MatchList;
