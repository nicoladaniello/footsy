import React, { Component } from "react";
import PropTypes from "prop-types";

class ScreenTemplate extends Component {
  static navigationOptions = {
    header: props => this.props.header
  };

  render() {
    return <Container>{...this.props.children}</Container>;
  }
}

ScreenTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
};

export default ScreenTemplate;
