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
  Switch
} from "native-base";
import MATCH_DURATION_OPTIONS from "./matchDurationOptions";
import TEAM_SIZE_OPTIONS from "./teamSizeOptions";
import AppDatePicker from "../../common/formComponents/appDatePicker";
import AppActionSheet from "../../common/formComponents/appActionSheet";
import AppSwitch from "../../common/formComponents/appSwitch";

class MatchForm extends Component {
  state = {
    data: {
      address: null,
      chosenDate: "",
      duration: null,
      teamSize: null,
      isPrivate: false
    }
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

  _handleTeamSizePicker = teamSize => {
    const data = { ...this.state.data };
    data.teamSize = teamSize;
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
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem
              icon
              onPress={() =>
                this.props.navigation.navigate("SearchAddress", {
                  handleAddressPicker: this._handleAddressPicker.bind(this)
                })
              }
            >
              <Left>
                <Icon name="md-pin" />
              </Left>
              <Body>
                {address ? (
                  <Text>{address.addrData.description}</Text>
                ) : (
                  <Text note>Location</Text>
                )}
              </Body>
            </ListItem>

            <AppDatePicker
              selected={chosenDate}
              onSelect={this._handleDatePicker}
            />

            <AppActionSheet
              selected={duration}
              data={MATCH_DURATION_OPTIONS}
              onSelect={this._handleDurationPicker}
              icon="md-stopwatch"
              placeHolder="Duration"
            />

            <AppActionSheet
              selected={teamSize}
              data={TEAM_SIZE_OPTIONS}
              onSelect={this._handleTeamSizePicker}
              icon="md-shirt"
              placeHolder="Team Size"
            />

            <AppSwitch
              text="Private"
              icon="ios-hand"
              isActive={isPrivate}
              onSelect={this._handlePrivateToggle}
            />

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
