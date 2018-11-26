import React, { Component } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import AppFormItem from "./appFormItem";

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
      <AppFormItem
        icon="calendar-clock"
        text={
          selected
            ? moment(selected).format("dddd, DD MMM YYYY [at] hh:mm A")
            : null
        }
        placeHolder="Date"
        onPress={this._showDatePicker}
      >
        <DateTimePicker
          mode="datetime"
          minimumDate={new Date()}
          maximumDate={new Date(2018, 12, 31)}
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleSelect}
          onCancel={this._hideDatePicker}
        />
      </AppFormItem>
    );
  }
}

export default AppDatePicker;
