import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  // Subtitle,
  Icon,
  Button
} from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const AppMapModal = ({ match, visible, onClose }) => {
  const accuracy = 120;
  const lat = match.address.latitude;
  const long = match.address.longitude;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
  const longDelta =
    accuracy / (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));
  const region = {
    latitude: lat,
    longitude: long,
    latitudeDelta: latDelta,
    longitudeDelta: longDelta,
    accuracy: accuracy
  };
  const marker = {
    latlng: {
      latitude: match.address.latitude,
      longitude: match.address.longitude
    },
    title: match.address.description
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
          <Title>{match.address.description}</Title>
          {/* <Subtitle>Subtitle</Subtitle> */}
        </Body>
        <Right />
      </Header>
      <View style={styles.container}>
        <Text>Map</Text>
        <MapView initialRegion={region} style={styles.map}>
          <Marker coordinate={marker.latlng} title={marker.title} />
        </MapView>
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
    padding: 16,
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
