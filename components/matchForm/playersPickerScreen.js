import React, { Component } from "react";
import { TouchableOpacity, RefreshControl, FlatList } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Content
} from "native-base";
import * as authService from "../../services/authService";
import * as userService from "../../services/userService";
import AppUser from "../../common/appUser";
import FormSelectItem from "../../common/formComponents/formSelectItem";

class PlayersPickerScreen extends Component {
  state = {
    friends: [],
    filteredFriends: [],
    players: [],
    query: "",
    refreshing: false
  };

  async componentWillMount() {
    await this._loadFriends();
  }

  _loadFriends = async () => {
    try {
      const players = this.props.navigation.state.params.players.map(
        p => p._id
      );
      this.setState({ refreshing: true, players });

      const currentUser = await authService.getCurrentUser();
      const friends = (await userService.getUserFriends(currentUser._id)).map(
        f => new AppUser(f)
      );
      const filteredFriends = friends;
      this.setState({ friends, filteredFriends, refreshing: false });
    } catch (ex) {
      console.error("Error loading friends in PlayersPickerScreen:", ex);
    }
  };

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
    const { query, filteredFriends, players } = this.state;
    const { navigation } = this.props;

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
        <Content
          padder
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._loadFriends}
            />
          }
        >
          <FlatList
            data={filteredFriends}
            extraData={players}
            renderItem={f => {
              console.log(
                "is friend in list? ",
                players.indexOf(f.item._id) >= 0
              );
              return (
                <FormSelectItem
                  active={players.indexOf(f.item._id) >= 0}
                  image={f.item.image}
                  text={f.item.fullName}
                  onPress={() => this._onPlayerSelect(f.item._id)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

export default PlayersPickerScreen;
