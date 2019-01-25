import React, { Component } from "react";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";

import MatchItem from "./matchItem";

class MatchItemDatePicker extends Component {
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
      <React.Fragment>
        <MatchItem
          icon="calendar-clock"
          title={
            selected &&
            moment(selected).format("dddd, DD MMM YYYY [at] hh:mm A")
          }
          subtitle={!selected && "Date"}
          onPress={this._showDatePicker}
        />
        <DateTimePicker
          mode="datetime"
          minimumDate={new Date()}
          maximumDate={new Date(2018, 12, 31)}
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this._handleSelect}
          onCancel={this._hideDatePicker}
        />
      </React.Fragment>
    );
  }
}

export default MatchItemDatePicker;
