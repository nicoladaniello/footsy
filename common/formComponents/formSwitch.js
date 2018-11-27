import React from "react";
import { ListItem, Left, Icon, Body, Text, Right, Switch } from "native-base";

const FormSwitch = ({ text, icon, isActive, onSelect }) => {
  return (
    <ListItem icon>
      <Left>
        <Icon name={icon} />
      </Left>
      <Body>
        <Text>{text}</Text>
      </Body>
      <Right>
        <Switch value={isActive} onValueChange={onSelect} />
      </Right>
    </ListItem>
  );
};

export default FormSwitch;
