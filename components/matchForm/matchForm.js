import React, { Component } from "react";
import {
  Content,
  Header,
  Title,
  Left,
  Body,
  Text,
  Container,
  Button,
  Icon,
  Right,
  List,
  ListItem,
  Switch,
  ActionSheet
} from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import MATCH_DURATION_OPTIONS from "./matchDurationOptions";
import TEAM_SIZE_OPTIONS from "./teamSizeOptions";

class MatchForm extends Component {
  state = {
    isDatePickerVisible: false,
    data: {
      chosenDate: "",
      duration: null,
      teamSize: null,
      isPrivate: false
    }
  };

  _showDurationPicker = () =>
    ActionSheet.show(MATCH_DURATION_OPTIONS, this._handleDurationPicker);

  _showTeamSizePicker = () =>
    ActionSheet.show(TEAM_SIZE_OPTIONS, this._handleTeamSizePicker);

  _handleDurationPicker = durationIdx => {
    const data = { ...this.state.data };
    data.duration = MATCH_DURATION_OPTIONS.options[durationIdx];
    this.setState({ data });
  };

  _handleTeamSizePicker = teamSizeIdx => {
    const data = { ...this.state.data };
    data.teamSize = TEAM_SIZE_OPTIONS.options[teamSizeIdx];
    this.setState({ data });
  };

  _showDatePicker = () => this.setState({ isDatePickerVisible: true });

  _hideDatePicker = () => this.setState({ isDatePickerVisible: false });

  _handleDatePicked = chosenDate => {
    const data = { ...this.state.data };
    data.chosenDate = chosenDate;
    this.setState({ data });
    this._hideDatePicker();
  };

  _togglePrivateOption = () => {
    const data = { ...this.state.data };
    data.isPrivate = !data.isPrivate;
    this.setState({ data });
  };

  render() {
    const { chosenDate, duration, teamSize, isPrivate } = this.state.data;
    return (
      <Container>
        <Header style={{ borderBottomWidth: 0 }}>
          <Left>
            <Button
              transparent
              dark
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="md-close" style={{ fontSize: 22 }} />
            </Button>
          </Left>
          <Body>
            <Title>Schedule Match</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem icon onPress={() => console.log("choose location")}>
              <Left>
                <Icon name="md-pin" />
              </Left>
              <Body>
                <Text note>Location</Text>
              </Body>
            </ListItem>

            <ListItem icon onPress={this._showDatePicker}>
              <Left>
                <Icon name="md-calendar" />
              </Left>
              <Body>
                {chosenDate ? (
                  <Text>{moment(chosenDate).format("dddd, DD MMM YYYY")}</Text>
                ) : (
                  <Text note>Date</Text>
                )}
              </Body>
              <Right>
                {chosenDate ? (
                  <Text>{moment(chosenDate).format("HH:mm")}</Text>
                ) : (
                  <Text note>Time</Text>
                )}
              </Right>
            </ListItem>

            <ListItem icon onPress={this._showDurationPicker}>
              <Left>
                <Icon name="md-stopwatch" />
              </Left>
              <Body>
                {duration ? (
                  <Text>{duration}</Text>
                ) : (
                  <Text note>Duration</Text>
                )}
              </Body>
              <Right />
            </ListItem>

            <ListItem icon onPress={this._showTeamSizePicker}>
              <Left>
                <Icon name="md-shirt" />
              </Left>
              <Body>
                {teamSize ? (
                  <Text>{teamSize}</Text>
                ) : (
                  <Text note>Team Size</Text>
                )}
              </Body>
              <Right />
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-hand" />
              </Left>
              <Body>
                <Text>Private</Text>
              </Body>
              <Right>
                <Switch
                  value={isPrivate}
                  onValueChange={this._togglePrivateOption}
                />
              </Right>
            </ListItem>

            <ListItem icon onPress={this._showDatePicker}>
              <Left>
                <Icon name="md-person-add" />
              </Left>
              <Body>
                <Text>Add Players</Text>
              </Body>
              <Right />
            </ListItem>
          </List>

          <DateTimePicker
            mode="datetime"
            minimumDate={new Date()}
            maximumDate={new Date(2018, 12, 31)}
            isVisible={this.state.isDatePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDatePicker}
          />

          {/* <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Create</Text>
          </Button> */}
        </Content>
      </Container>
    );
  }
}

const styles = {
  icon: {
    flex: 1,
    padding: 8
  },
  formGroup: {
    padding: 8,
    borderBottomWidth: 0.3
  }
};

export default MatchForm;
