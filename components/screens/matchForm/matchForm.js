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
import { MatchDurations, TeamSizes } from "../../../enviroment";
import * as matchesSvc from "../../../services/matchesService";
import MatchItemDatePicker from "../../molecules/matchItem/MatchItemDatePicker";
import MatchItemActionSheet from "../../molecules/matchItem/matchItemActionSheet";
import FormSwitch from "../../../common/formComponents/formSwitch";
import MatchItemCurrencyInput from "../../molecules/matchItem/matchItemCurrencyInput";
import FormPlayersItem from "../../../common/formComponents/formPlayersItem";
import AppUserList from "../../../common/appUserList";
import MatchItem from "../../molecules/matchItem/matchItem";

class MatchForm extends Component {
  state = {
    data: {
      address: null,
      duration: null,
      eventDate: null,
      isPrivate: false,
      price: null,
      teamSize: null,
      players: new AppUserList()
    }
  };

  _handleSubmit = () => {
    if (this._invalidForm()) return;

    const match = this.state.data;
    match.players = match.players.list;
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
    // console.log("addrData", addrData);
    // console.log("details", details);
    const data = { ...this.state.data };
    data.address = addrData;
    data.address.latitude = details.geometry.location.lat;
    data.address.longitude = details.geometry.location.lng;
    this.setState({ data });
  };

  _handlePlayersPicker = players => {
    const data = { ...this.state.data };
    data.players = new AppUserList(players);
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
      isPrivate,
      players
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
            <MatchItem
              icon="map-marker"
              title={address && address.description}
              subtitle={!address && "Choose address"}
              onPress={() =>
                navigation.navigate("SearchAddress", {
                  handleAddressPicker: this._handleAddressPicker
                })
              }
            />
            {/* End Address picker */}

            {/* Date Time picker */}
            <MatchItemDatePicker
              selected={eventDate}
              onSelect={this._handleDatePicker}
            />
            {/* End Date Time picker */}

            {/* Duration picker */}
            <MatchItemActionSheet
              icon="duration"
              title="Match duration"
              placeholder="Duration"
              data={MatchDurations}
              selected={duration}
              onSelect={this._handleDurationPicker}
            />
            {/* End Duration picker */}

            {/* Team size picker */}
            <MatchItemActionSheet
              icon="team"
              title="Team size"
              placeholder="Team size"
              data={TeamSizes}
              selected={teamSize}
              onSelect={this._handleTeamSizePicker}
            />
            {/* End Team size picker */}

            {/* Price input */}
            <MatchItemCurrencyInput onChangeValue={this._handlePriceChange} />

            {/* Private toggle */}
            <FormSwitch
              text="Private"
              icon="ios-hand"
              isActive={isPrivate}
              onSelect={this._handlePrivateToggle}
            />

            {/* Players picker */}
            <MatchItem
              icon="add-players"
              title={players.formattedText || "Invite Friends"}
              onPress={() =>
                navigation.navigate("AddPlayers", {
                  players: players,
                  handlePlayersPicker: this._handlePlayersPicker
                })
              }
            />
          </List>
        </Content>
      </Container>
    );
  }
}

export default MatchForm;
