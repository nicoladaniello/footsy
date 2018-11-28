import React from "react";
import FormItem from "./formItem";

const _formatLabel = users => {
  if (!users || !users.length) return null;
  if (users.length === 1) return users[0].fullName;
  if (users.length === 2)
    return `${users[0].fullName} and ${users[1].fullName}`;
  if (users.length === 3)
    return `${users[0].fullName}, ${users[1].fullName} and ${
      users[2].fullName
    }`;
  if (users.length > 3)
    return `${users[0].fullName}, ${users[1].fullName} and ${users.length -
      2} others`;
};

const FormPlayersItem = ({ players, onPress }) => {
  return (
    <FormItem
      icon="add-players"
      value={_formatLabel(players)}
      placeHolder="Invite Friends"
      onPress={onPress}
    />
  );
};

export default FormPlayersItem;
