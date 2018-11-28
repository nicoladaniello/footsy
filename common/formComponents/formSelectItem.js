import React from "react";
import { StyleSheet } from "react-native";
import {
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Text,
  Icon
} from "native-base";

const FormSelectItem = ({ active, image, text, note, onPress }) => {
  return (
    <ListItem avatar onPress={onPress}>
      <Left>
        {!active ? (
          <Thumbnail small source={{ uri: image }} />
        ) : (
          <Icon style={styles.icon} name="md-checkmark-circle" />
        )}
      </Left>
      <Body>
        <Text>{text}</Text>
        {note ? <Text note>{note}</Text> : null}
      </Body>
      <Right />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36,
    fontSize: 36
  }
});

export default FormSelectItem;
