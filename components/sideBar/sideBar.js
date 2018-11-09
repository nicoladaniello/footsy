import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Home", "My Matches", "Notifications", "Settings"];

const SideBar = props => {
  return (
    <Container>
      <Content>
        <ImageBackground
          source={{
            uri: "https://via.placeholder.com/250/3498db/fff"
          }}
          style={{
            height: 120,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            square
            style={{ height: 80, width: 70 }}
            source={{
              uri:
                "https://facebook.github.io/react-native/docs/assets/favicon.png"
            }}
          />
        </ImageBackground>
        <List
          dataArray={routes}
          renderRow={data => {
            return (
              <ListItem button onPress={() => props.navigation.navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default SideBar;
