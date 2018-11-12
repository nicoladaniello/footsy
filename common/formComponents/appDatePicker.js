import React, { Component } from "react";
import { ListItem, Left, Icon, Body, Text, Right } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

class AppDatePicker extends Component {
  state = {
    isDatePickerVisible: false
  };

  _handleSelect = date => {
    this._hideDatePicker();
    this.props.onSelect(date);
  };

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });
  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

  render() {
    const { selected } = this.props;

    return (
      <ListItem icon onPress={this._showDatePicker}>
        <Left>
          <Icon name="md-calendar" />
        </Left>
        <Body>
          {selected ? (
            <Text>{moment(selected).format("dddd, DD MMM YYYY")}</Text>
          ) : (
            <Text note>Date</Text>
          )}
        </Body>
        <Right>
          {selected ? (
            <Text>{moment(selected).format("HH:mm")}</Text>
          ) : (
            <Text note>Time</Text>
          )}
        </Right>

        <DateTimePicker
          mode="datetime"
          minimumDate={new Date()}
          maximumDate={new Date(2018, 12, 31)}
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleSelect}
          onCancel={this._hideDatePicker}
        />
      </ListItem>
    );
  }
}

export default AppDatePicker;
