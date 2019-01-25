import React from "react";
import { Icon as NBIcon } from "native-base";
import PropTypes from "prop-types";

const DEFAULT_ICON_TYPE = "Ionicons";

const APP_ICONS = {
  "map-marker": {
    type: "MaterialIcons",
    name: "place"
  },
  "calendar-clock": {
    type: "MaterialCommunityIcons",
    name: "calendar-clock"
  },
  team: {
    type: DEFAULT_ICON_TYPE,
    name: "md-shirt"
  },
  duration: {
    type: "MaterialIcons",
    name: "timer"
  },
  money: {
    type: "MaterialIcons",
    name: "attach_money"
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
    type: "MaterialIcons",
    name: "person-add"
  },
  "chevron-left": {
    type: "MaterialIcons",
    name: "chevron-left"
  },
  "chevron-right": {
    type: "MaterialIcons",
    name: "chevron-right"
  },
  more: {
    type: "MaterialIcons",
    name: "more-horiz"
  },
  directions: {
    type: "MaterialIcons",
    name: "directions"
  }
};

const Icon = ({ name, ...rest }) => (
  <NBIcon type={APP_ICONS[name].type} name={APP_ICONS[name].name} {...rest} />
);

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(APP_ICONS)).isRequired
};

export default Icon;
