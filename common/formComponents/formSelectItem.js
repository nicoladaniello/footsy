import React from "react";
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
    <ListItem avatar={!active} icon={active} onPress={onPress}>
      <Left>
        {!active ? (
          <Thumbnail small source={{ uri: image }} />
        ) : (
          <Icon name="md-checkmark-circle" />
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

export default FormSelectItem;
