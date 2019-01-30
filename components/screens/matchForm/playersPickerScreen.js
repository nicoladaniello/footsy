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
import * as UserFriendsService from "../../../services/userFriendsService";
import AppUser from "../../../models/appUser";
import ListItemSelect from "../../molecules/listItemSelect/listItemSelect";

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
      const { params } = this.props.navigation.state;
      const players = params.players.list;

      this.setState({ refreshing: true, players });

      const friends = (await UserFriendsService.get()).map(f => new AppUser(f));
      const filteredFriends = friends;

      this.setState({ friends, filteredFriends, refreshing: false });
    } catch (ex) {
      console.error("Error loading friends in PlayersPickerScreen:", ex);
    }
  };

  _filterFriends = (query = "") => {
    const filteredFriends = query
      ? this.state.filteredFriends.filter(f => f.name.includes(query))
      : this.state.friends;

    this.setState({ filteredFriends, query });
  };

  _onSave = () => {
    this.props.navigation.state.params.handlePlayersPicker(this.state.players);
    this.props.navigation.goBack();
  };

  _onSelect = player => {
    const players = [...this.state.players];
    const index = players.map(p => p.id).indexOf(player.id);

    if (index < 0) players.push(player);
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
              onChangeText={text => this._filterFriends(text)}
            />
            {query.length ? (
              <TouchableOpacity onPress={() => this._filterFriends()}>
                <Icon name="ios-close-circle" />
              </TouchableOpacity>
            ) : null}
          </Item>
          <Button transparent onPress={this._onSave}>
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
            renderItem={f => (
              <ListItemSelect
                active={players.map(p => p.id).indexOf(f.item.id) > -1}
                image={f.item.image}
                text={f.item.name}
                onPress={() => this._onSelect(f.item)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

export default PlayersPickerScreen;
