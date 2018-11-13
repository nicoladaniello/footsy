import React from "react";
import {
  ActionSheet,
  ListItem,
  Left,
  Icon,
  Body,
  Right,
  Text
} from "native-base";

const AppActionSheet = ({
  data,
  title,
  icon,
  selected,
  onSelect,
  placeHolder
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
    <ListItem icon onPress={showActionSheet}>
      <Left>
        <Icon name={icon} />
      </Left>
      <Body>
        {selected ? (
          <Text>{data[selected]}</Text>
        ) : (
          <Text note>{placeHolder}</Text>
        )}
      </Body>
      <Right />
    </ListItem>
  );
};

export default AppActionSheet;
