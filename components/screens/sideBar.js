import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Body,
  Thumbnail,
  H3
} from "native-base";
import { signOut } from "../../services/authService";

const routes = ["Home", "My Matches", "Notifications", "Settings"];

class SideBar extends Component {
  state = { user: { name: {} } };

  async componentWillMount() {
    try {
      const user = this.props.navigation.state.params.user;
      if (!user) throw new Error();
      this.setState({ user });
    } catch (ex) {
      this.props.navigation.navigate("SignIn");
    }
  }

  render() {
    const { navigation } = this.props;
    const { user } = this.state;

    return (
      <Container>
        <Content>
          <List>
            <ListItem style={{ paddingLeft: 16, paddingTop: 24 }}>
              <Body>
                <Thumbnail
                  circular
                  source={{ uri: user.image }}
                  style={{ marginBottom: 16 }}
                />
                <H3>{`${user.name.first} ${user.name.last}`}</H3>
              </Body>
            </ListItem>
            {routes.map(route => (
              <ListItem
                key={route}
                button
                style={{ height: 60 }}
                onPress={() => navigation.navigate(route)}
              >
                <Text style={{ fontSize: 14, marginLeft: 16 }}>{route}</Text>
              </ListItem>
            ))}
            <ListItem
              button
              style={{ height: 60 }}
              onPress={this._handleLogOut}
            >
              <Text style={{ fontSize: 14, marginLeft: 16 }}>Logout</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

  _handleLogOut = async () => {
    try {
      await signOut();
      this.props.navigation.navigate("SignIn");
    } catch (ex) {
      console.error("Error signing out:", ex);
    }
  };
}

export default SideBar;
