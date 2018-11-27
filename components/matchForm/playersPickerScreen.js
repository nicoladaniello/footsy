import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import * as authService from "../../services/authService";
import * as userService from "../../services/userService";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content,
  List,
  ListItem,
  Body
} from "native-base";
import FormSelectItem from "../../common/formComponents/formSelectItem";
import AppUser from "../../common/appUser";

class PlayersPickerScreen extends Component {
  state = {
    friends: [],
    filteredFriends: [],
    players: [],
    query: ""
  };

  async componentWillMount() {
    try {
      const currentUser = await authService.getCurrentUser();
      const friends = (await userService.getUserFriends(currentUser._id)).map(
        f => new AppUser(f)
      );
      const filteredFriends = friends;
      this.setState({ friends, filteredFriends });
    } catch (ex) {
      console.error("Error loading friends in PlayersPickerScreen:", ex);
    }
  }

  _onChangeQuery = (query = "") => {
    const filteredFriends = query
      ? this.state.filteredFriends.filter(f => f.fullName.includes(query))
      : this.state.friends;

    this.setState({ filteredFriends, query });
  };

  _onComplete = () => {
    const { friends, players } = this.state;
    const pickedPlayers = friends.filter(f => players.includes(f._id));
    this.props.navigation.state.params.handlePlayersPicker(pickedPlayers);
    this.props.navigation.goBack();
  };

  _onPlayerSelect = id => {
    const players = [...this.state.players];
    const index = players.indexOf(id);
    console.log(players);

    if (index < 0) players.push(id);
    else players.splice(index, 1);

    this.setState({ players });
  };

  render() {
    const { players, query, filteredFriends } = this.state;
    const { navigation } = this.props;

    const friendsList = filteredFriends ? (
      filteredFriends.map(f => (
        <FormSelectItem
          active={players.indexOf(f._id) < 0}
          key={f._id}
          image={f.image}
          text={f.fullName}
          onPress={() => this._onPlayerSelect(f._id)}
        />
      ))
    ) : (
      <ListItem>
        <Body>
          <Text>Loading...</Text>
        </Body>
      </ListItem>
    );

    return (
      <Container>
        <Header searchBar rounded>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 8 }}
          >
            <Icon type="MaterialCommunityIcons" name="chevron-left" />
          </TouchableOpacity>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={query}
              onChangeText={text => this._onChangeQuery(text)}
            />
            {query.length ? (
              <TouchableOpacity onPress={() => this._onChangeQuery()}>
                <Icon name="ios-close-circle" />
              </TouchableOpacity>
            ) : null}
          </Item>
          <Button transparent onPress={this._onComplete}>
            <Text>SAVE</Text>
          </Button>
        </Header>
        <Content padder>
          <List>{friendsList}</List>
        </Content>
      </Container>
    );
  }
}

export default PlayersPickerScreen;
