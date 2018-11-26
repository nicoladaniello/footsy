import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
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
  Toast
} from "native-base";
import { MatchDurations, TeamSizes } from "../../enviroment";
import AppDatePicker from "../../common/formComponents/appDatePicker";
import AppActionSheet from "../../common/formComponents/appActionSheet";
import AppSwitch from "../../common/formComponents/appSwitch";
import AppFormItem from "../../common/formComponents/appFormItem";
import * as matchesSvc from "../../services/matchesService";
import AppCurrencyInput from "../../common/formComponents/appCurrencyInput";

class MatchForm extends Component {
  state = {
    data: {
      address: null,
      duration: null,
      eventDate: null,
      isPrivate: false,
      price: null,
      teamSize: null
    }
  };

  _handleSubmit = () => {
    if (this._invalidForm()) return;

    const match = this.state.data;
    const promise = matchesSvc.saveMatch(match);

    callback = this._onMatchSave(promise);
    this.props.navigation.navigate("Root");
  };

  _onMatchSave = promise => {
    Toast.show({
      type: "warning",
      text: "Saving your match..."
    });

    promise.then(result => {
      if (result) {
        Toast.show({
          text: "Match saved!",
          buttonText: "Okay",
          type: "success"
        });
      }
    });
  };

  _invalidForm = () => {
    const { address, duration, eventDate, price, teamSize } = this.state.data;
    if (address && duration && eventDate && price && teamSize) return false;
    return true;
  };

  _handleAddressPicker = (addrData, details) => {
    const data = { ...this.state.data };
    data.address = addrData;
    data.address.latitude = details.geometry.location.lat;
    data.address.longitude = details.geometry.location.lng;
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

  _handleDatePicker = eventDate => {
    const data = { ...this.state.data };
    data.eventDate = eventDate;
    this.setState({ data });
  };

  _handlePriceChange = price => {
    const data = { ...this.state.data };
    data.price = price;
    this.setState({ data });
  };

  _handlePrivateToggle = () => {
    const data = { ...this.state.data };
    data.isPrivate = !data.isPrivate;
    this.setState({ data });
  };

  render() {
    const { navigation } = this.props;
    const {
      address,
      eventDate,
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
              onPress={() => navigation.dispatch(NavigationActions.back())}
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
              icon="map-marker"
              value={address ? address.description : null}
              placeHolder="Address"
              onPress={() =>
                navigation.navigate("SearchAddress", {
                  handleAddressPicker: this._handleAddressPicker
                })
              }
            />
            {/* Date Time picker */}
            <AppDatePicker
              selected={eventDate}
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

            {/* Price input */}
            <AppCurrencyInput onChangeValue={this._handlePriceChange} />

            {/* Private toggle */}
            <AppSwitch
              text="Private"
              icon="ios-hand"
              isActive={isPrivate}
              onSelect={this._handlePrivateToggle}
            />
            {/* Players picker */}
            <AppFormItem
              icon="add-players"
              onPress={() => console.log("pick players")}
              text="Add players"
            />
          </List>
        </Content>
      </Container>
    );
  }
}

export default MatchForm;
