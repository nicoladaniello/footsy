import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content } from "native-base";
import FormSelectItem from "../../common/formComponents/formSelectItem";

class MatchPlayersScreen extends Component {
  constructor(props) {
    super(props);
    const players = this.props.navigation.getParam("players");

    this.state = {
      players: players.list
    };
  }

  _onSelect = player => {
    console.log("player:", player.fullName);
  };

  render() {
    const { players } = this.state;

    return (
      <Container>
        <Content padder>
          <FlatList
            data={players}
            renderItem={p => (
              <FormSelectItem
                image={p.item.image}
                text={p.item.fullName}
                onPress={() => this._onSelect(p.item)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

export default MatchPlayersScreen;
