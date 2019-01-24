import React from "react";
import { ListItem, Left, Body, Right, Icon, Text } from "native-base";

const DEFAULT_ICON_TYPE = "Ionicons";

const APP_ICONS = {
  "map-marker": {
    type: "MaterialCommunityIcons",
    name: "map-marker"
  },
  "calendar-clock": {
    type: "MaterialCommunityIcons",
    name: "calendar-clock"
  },
  team: {
    type: DEFAULT_ICON_TYPE,
    name: "md-shirt"
  },
  payment: {
    type: "MaterialCommunityIcons",
    name: "credit-card"
  },
  share: {
    type: "MaterialCommunityIcons",
    name: "share-variant"
  },
  join: {
    type: "MaterialCommunityIcons",
    name: "calendar-plus"
  },
  "add-players": {
    type: DEFAULT_ICON_TYPE,
    name: "md-person-add"
  }
};

const FormItem = ({
  icon,
  onPress,
  value,
  text,
  note,
  placeHolder,
  children
}) => {
  if (!text) {
    text = value ? <Text>{value}</Text> : <Text note>{placeHolder}</Text>;
  } else text = <Text>{text}</Text>;

  const appIcon = (
    <Icon primary type={APP_ICONS[icon].type} name={APP_ICONS[icon].name} />
  );
  const subtext = note ? <Text note>{note}</Text> : null;

  return (
    <ListItem icon onPress={onPress}>
      <Left>{appIcon}</Left>
      <Body>
        {text}
        {subtext}
      </Body>
      <Right />
      {children ? children : null}
    </ListItem>
  );
};

export default FormItem;
