import React from "react";
import { ListItem, Body, Text, Left, Right, Thumbnail } from "native-base";
import PropTypes from "prop-types";

import Icon from "../../atoms/icon/Icon";

const ItemTypes = {
  nav: "chevron-right",
  more: "more",
  directions: "directions"
};

const MatchItem = ({
  title,
  subtitle,
  icon,
  avatar,
  type,
  onPress,
  children
}) => {
  return (
    <ListItem icon={!!icon} avatar={!!avatar} onPress={onPress}>
      <Left>
        {icon && <Icon primary name={icon} />}
        {avatar && <Thumbnail small source={avatar} />}
      </Left>
      <Body>
        {title && <Text>{title}</Text>}
        {subtitle && <Text note>{subtitle}</Text>}
        {children}
      </Body>
      {type && (
        <Right>
          <Icon name={ItemTypes[type]} />
        </Right>
      )}
    </ListItem>
  );
};

MatchItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.any,
  type: PropTypes.oneOf(Object.keys(ItemTypes)),
  onPress: PropTypes.func
};

export default MatchItem;
