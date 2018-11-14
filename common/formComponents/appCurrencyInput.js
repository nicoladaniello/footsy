import React, { Component } from "react";
import { ListItem, Left, Icon, Body } from "native-base";
import { TextInputMask } from "react-native-masked-text";

/*
  props.onChangeValue(valueInPence)
*/

class AppCurrencyInput extends Component {
  state = { value: "" };

  handleChangeText = value => {
    this.setState({ value });

    const valueInPence = Number(value) * 100;
    if (Number.isInteger(valueInPence)) this.props.onChangeValue(valueInPence);
  };

  render() {
    return (
      <ListItem icon>
        <Left>
          <Icon type="Foundation" name="pound" style={{ fontSize: 35 }} />
        </Left>
        <Body>
          <TextInputMask
            placeholder="Price"
            type={"money"}
            onChangeText={this.handleChangeText}
            value={this.state.value}
            options={{ unit: "", delimiter: "", separator: "." }}
            style={{ fontSize: 14 }}
          />
        </Body>
      </ListItem>
    );
  }
}

export default AppCurrencyInput;
