import React from "react";
import { ListItem, Body, Text, Left, Right } from "native-base";
import PropTypes from "prop-types";

import Icon from "../../atoms/icon/Icon";

const MatchItem = ({ title, subtitle, icon, type, onPress }) => {
  const types = {
    nav: "nav",
    dots: "dots"
  };

  return (
    <ListItem icon onPress={onPress}>
      <Left>
        <Icon primary name={icon} />
      </Left>
      <Body>
        <Text>{title}</Text>
        {subtitle && <Text note>{subtitle}</Text>}
      </Body>
      {type && (
        <Right>
          <Icon name={types[type]} />
        </Right>
      )}
    </ListItem>
  );
};

MatchItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.oneOf(MatchItem.types),
  onPress: PropTypes.func
};

export default MatchItem;
