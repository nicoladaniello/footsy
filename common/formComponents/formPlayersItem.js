import React from "react";
import FormItem from "./formItem";

const FormPlayersItem = ({ players, onPress }) => {
  return (
    <FormItem
      icon="add-players"
      value={players.formattedText}
      placeHolder="Invite Friends"
      onPress={onPress}
    />
  );
};

export default FormPlayersItem;
