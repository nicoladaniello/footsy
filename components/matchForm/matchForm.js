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
  List
} from "native-base";
import { MatchDurations, TeamSizes } from "../../enviroment";
import AppDatePicker from "../../common/formComponents/appDatePicker";
import AppActionSheet from "../../common/formComponents/appActionSheet";
import AppSwitch from "../../common/formComponents/appSwitch";
import AppFormItem from "../../common/formComponents/appFormItem";
import * as matchesSvc from "../../services/matchesService";

class MatchForm extends Component {
  state = {
    data: {
      address: null,
      chosenDate: null,
      duration: null,
      teamSize: null,
      isPrivate: false
    }
  };

  _handleSubmit = () => {
    console.log(this.state.data);
    if (this._invalidForm()) return;

    const match = this.state.data;
    matchesSvc.saveMatch(match);
    this.props.navigation.goBack();
  };

  _invalidForm = () => {
    const { address, chosenDate, duration, teamSize } = this.state.data;
    if (address && chosenDate && duration && teamSize) return false;
    return true;
  };

  _handleAddressPicker = (addrData, details) => {
    const data = { ...this.state.data };
    data.address = { addrData, details };
    console.log("CALLBACK", data.address);
    this.setState({ data });
  };

  _handleDurationPicker = duration => {
    const data = { ...this.state.data };
    data.duration = duration;
    this.setState({ data });
  };

  _handleTeamSizePicker = size => {
    const data = { ...this.state.data };
    data.teamSize = size;
    this.setState({ data });
  };

  _handleDatePicker = chosenDate => {
    const data = { ...this.state.data };
    data.chosenDate = chosenDate;
    this.setState({ data });
  };

  _handlePrivateToggle = () => {
    const data = { ...this.state.data };
    data.isPrivate = !data.isPrivate;
    this.setState({ data });
  };

  render() {
    const {
      address,
      chosenDate,
      duration,
      teamSize,
      isPrivate
    } = this.state.data;

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
          <Right>
            <Button
              transparent
              disabled={this._invalidForm()}
              onPress={this._handleSubmit}
            >
              <Text>SAVE</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {/* Address picker */}
            <AppFormItem
              onPress={() =>
                this.props.navigation.navigate("SearchAddress", {
                  handleAddressPicker: this._handleAddressPicker.bind(this)
                })
              }
              value={address ? address.addrData.description : null}
              icon="md-pin"
              placeHolder="Address"
            />
            {/* Date Time picker */}
            <AppDatePicker
              selected={chosenDate}
              onSelect={this._handleDatePicker}
            />
            {/* Duration picker */}
            <AppActionSheet
              data={MatchDurations}
              selected={duration}
              onSelect={this._handleDurationPicker}
              title="Match duration"
              icon="md-stopwatch"
              placeHolder="Duration"
            />
            {/* Team size picker */}
            <AppActionSheet
              data={TeamSizes}
              selected={teamSize}
              onSelect={this._handleTeamSizePicker}
              title="Team size"
              icon="md-shirt"
              placeHolder="Team size"
            />
            {/* Private toggle */}
            <AppSwitch
              text="Private"
              icon="ios-hand"
              isActive={isPrivate}
              onSelect={this._handlePrivateToggle}
            />
            {/* Players picker */}
            <AppFormItem
              onPress={() => console.log("pick players")}
              icon="md-person-add"
              text="Add players"
            />
          </List>
        </Content>
      </Container>
    );
  }
}

export default MatchForm;
