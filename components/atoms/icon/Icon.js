import React from "react";
import { Icon as NBIcon } from "native-base";

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

const Icon = ({ name, ...rest }) => (
  <NBIcon type={APP_ICONS[name].type} name={APP_ICONS[name].name} {...rest} />
);

export default Icon;
