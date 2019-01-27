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
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";

GoogleSignin.configure();

class SignInScreen extends Component {
  state = {
    isSigninInProgress: false
  };

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
            <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
              disabled={this.state.isSigninInProgress}
            />
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
      this.setState({ isSigninInProgress: true });
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      this.props.navigation.navigate("App", { user });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        this.setState({ isSigninInProgress: false });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        this.setState({ isSigninInProgress: true });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        this.setState({ isSigninInProgress: false });
      } else {
        // some other error happened
        this.setState({ isSigninInProgress: false });
        console.error("Error in signInScreen._signIn:", error);
      }
    }
  };
}

export default SignInScreen;
