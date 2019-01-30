import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { Header, Left, Body, Right, Title, Icon, Button } from "native-base";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const MatchMapScreen = ({ match, visible, onClose }) => {
  const accuracy = 120;
  const lat = match.coords.latitude;
  const long = match.coords.longitude;
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
      latitude: match.coords.latitude,
      longitude: match.coords.longitude
    },
    title: match.address.main_text
  };

  return (
    <Modal animationType="fade" transparent={false} visible={visible}>
      <Header style={styles.header}>
        <Left>
          <Button transparent onPress={onClose}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>{match.address.main_text}</Title>
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

export default MatchMapScreen;
//provider={PROVIDER_GOOGLE}
