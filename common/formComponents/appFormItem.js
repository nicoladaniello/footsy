import React from "react";
import { ListItem, Left, Body, Right, Icon, Text, Button } from "native-base";

const DEFAULT_ICON_TYPE = "Ionicons";

const APP_ICONS = {
  "map-marker": {
    type: "MaterialCommunityIcons",
    name: "map-marker",
    bgColor: "#FF9501"
  },
  "calendar-clock": {
    type: "MaterialCommunityIcons",
    name: "calendar-clock",
    bgColor: "blue"
  },
  team: {
    type: DEFAULT_ICON_TYPE,
    name: "md-shirt",
    bgColor: "yellow"
  },
  payment: {
    type: "MaterialCommunityIcons",
    name: "credit-card",
    bgColor: "blue"
  },
  share: {
    type: "MaterialCommunityIcons",
    name: "share-variant",
    bgColor: "green"
  },
  join: {
    type: "MaterialCommunityIcons",
    name: "calendar-plus",
    bgColor: "blue"
  }
};

const AppFormItem = ({
  active,
  icon,
  onPress,
  value,
  text,
  note,
  placeHolder,
  ...rest
}) => {
  if (!text) {
    text = value ? <Text>{value}</Text> : <Text note>{placeHolder}</Text>;
  } else text = <Text>{text}</Text>;

  const appIcon = active ? (
    <Button style={{ backgroundColor: APP_ICONS[icon].bgColor }}>
      <Icon
        active={active}
        type={APP_ICONS[icon].type}
        name={APP_ICONS[icon].name}
      />
    </Button>
  ) : (
    <Icon
      active={active}
      type={APP_ICONS[icon].type}
      name={APP_ICONS[icon].name}
    />
  );

  const subtext = note ? <Text note>{note}</Text> : null;

  return (
    <ListItem icon onPress={onPress} {...rest}>
      <Left>{appIcon}</Left>
      <Body>
        {text}
        {subtext}
      </Body>
      <Right />
    </ListItem>
  );
};

export default AppFormItem;
