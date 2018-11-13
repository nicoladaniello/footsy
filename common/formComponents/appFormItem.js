import React from "react";
import { ListItem, Left, Body, Right, Icon, Text } from "native-base";

const AppFormItem = ({
  icon,
  onPress,
  value,
  text = null,
  placeHolder = null,
  ...rest
}) => {
  if (!text) {
    text = value ? <Text>{value}</Text> : <Text note>{placeHolder}</Text>;
  } else text = <Text>{text}</Text>;

  return (
    <ListItem icon onPress={onPress} {...rest}>
      <Left>
        <Icon name={icon} />
      </Left>
      <Body>{text}</Body>
      <Right />
    </ListItem>
  );
};

export default AppFormItem;
