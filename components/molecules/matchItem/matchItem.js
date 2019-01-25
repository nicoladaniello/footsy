import React from "react";
import { ListItem, Body, Text, Left, Right, Thumbnail } from "native-base";
import PropTypes from "prop-types";

import Icon from "../../atoms/icon/Icon";

const MatchItem = ({ title, subtitle, icon, avatar, type, onPress }) => {
  const types = {
    nav: "chevron-right",
    more: "more",
    directions: "directions"
  };

  return (
    <ListItem icon={!!icon} avatar={!!avatar} onPress={onPress}>
      <Left>
        {icon && <Icon primary name={icon} />}
        {avatar && <Thumbnail small source={avatar} />}
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
