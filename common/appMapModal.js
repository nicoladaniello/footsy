import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Icon,
  Button
} from "native-base";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const AppMapModal = ({ visible, onClose }) => {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={onClose}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Body>
        <Right />
      </Header>
      <View style={styles.container}>
        <Text>Map</Text>
        <MapView initialRegion={region} style={styles.map} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  }
});

export default AppMapModal;
//provider={PROVIDER_GOOGLE}
