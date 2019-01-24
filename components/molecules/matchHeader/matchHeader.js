import React from "react";
import { ListItem, Body, Text } from "native-base";
import PropTypes from "prop-types";

const MatchHeader = ({ title, subtitle }) => {
  return (
    <ListItem header>
      <Body>
        <Text>{title}</Text>
        <Text note>{subtitle}</Text>
      </Body>
    </ListItem>
  );
};

MatchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default MatchHeader;
