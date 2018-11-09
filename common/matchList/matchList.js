import React from "react";
import { List, Button, Icon } from "native-base";
import MatchListItem from "./matchListItem";

const MatchList = ({ matches, handlePress, filters = false }) => {
  const filtersItem = filters ? (
    <Button block light>
      <Icon name="md-search" />
    </Button>
  ) : (
    ""
  );

  return (
    <List>
      {filtersItem}

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
