import React, { Component } from "react";
import { TextInputMask } from "react-native-masked-text";

import MatchItem from "./matchItem";

/*
  props.onChangeValue(valueInPence)
*/

class MatchItemCurrencyInput extends Component {
  state = { value: "" };

  handleChangeText = value => {
    this.setState({ value });

    const valueInPence = Number(value) * 100;
    if (Number.isInteger(valueInPence)) this.props.onChangeValue(valueInPence);
  };

  render() {
    return (
      <MatchItem icon="money">
        <TextInputMask
          placeholder="Price"
          type={"money"}
          onChangeText={this.handleChangeText}
          value={this.state.value}
          options={{ unit: "", delimiter: "", separator: "." }}
          style={{ fontSize: 15 }}
        />
      </MatchItem>
    );
  }
}

export default MatchItemCurrencyInput;
