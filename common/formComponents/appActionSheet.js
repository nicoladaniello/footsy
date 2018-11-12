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

const AppActionSheet = ({ data, icon, selected, onSelect, placeHolder }) => {
  const handleSelect = idx => {
    const result = data.options[idx];
    onSelect(result);
  };

  const showActionSheet = () => ActionSheet.show(data, handleSelect);

  return (
    <ListItem icon onPress={showActionSheet}>
      <Left>
        <Icon name={icon} />
      </Left>
      <Body>
        {selected ? <Text>{selected}</Text> : <Text note>{placeHolder}</Text>}
      </Body>
      <Right />
    </ListItem>
  );
};

export default AppActionSheet;
