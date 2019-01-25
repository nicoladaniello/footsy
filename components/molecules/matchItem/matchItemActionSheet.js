import React from "react";
import { ActionSheet } from "native-base";

import MatchItem from "./matchItem";

const MatchItemActionSheet = ({
  data,
  title,
  icon,
  selected,
  onSelect,
  placeholder
}) => {
  const options = [...Object.values(data), "Cancel"];
  const cancelButtonIndex = options.length - 1;

  const values = {
    options,
    cancelButtonIndex,
    title
  };

  const handleSelect = idx => {
    const result =
      idx !== cancelButtonIndex
        ? Object.keys(data).find(key => data[key] === options[idx])
        : selected;

    onSelect(result);
  };

  const showActionSheet = () => ActionSheet.show(values, handleSelect);

  return (
    <MatchItem
      icon={icon}
      title={selected && data[selected]}
      subtitle={!selected && placeholder}
      onPress={showActionSheet}
    />
  );
};

export default MatchItemActionSheet;
