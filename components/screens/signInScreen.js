import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  Container,
  Content,
  Text,
  Icon,
  Thumbnail,
  Button,
  View,
  H1
} from "native-base";
import { signInWithSocial } from "../../services/authService";

class SignInScreen extends Component {
  render() {
    const { height: screenHeight } = Dimensions.get("window");
    return (
      <Container>
        <Content padder>
          <View
            padder
            style={{
              flex: 1,
              height: screenHeight,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Thumbnail
              style={{ marginBottom: 20 }}
              large
              source={{ uri: "https://via.placeholder.com/150/3498db/fff" }}
            />
            <H1 style={{ marginBottom: 120 }}>Footsy</H1>
            <Button
              light
              block
              style={{ marginBottom: 20 }}
              onPress={this._signIn}
            >
              <Icon active name="logo-googleplus" style={{ color: "red" }} />
              <Text style={{ color: "red" }}>Sign in with Google</Text>
            </Button>
            <Button light block onPress={this._signIn}>
              <Icon active name="logo-facebook" style={{ color: "blue" }} />
              <Text style={{ color: "blue" }}>Sign in with Facebook</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }

  _signIn = async () => {
    try {
      const user = await signInWithSocial();
      this.props.navigation.navigate("App", { user });
    } catch (ex) {
      console.error("Error logging in:", ex);
    }
  };
}

export default SignInScreen;
