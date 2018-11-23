import React from "react";
import { Modal } from "react-native";
import MapView from "react-native-maps";

const AppMapModal = ({ visible }) => {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <MapView initialRegion={region} />
    </Modal>
  );
};

export default AppMapModal;
