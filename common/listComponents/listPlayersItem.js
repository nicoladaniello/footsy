import React from "react";
import { Right, Icon } from "native-base";
import FormItem from "../../common/formComponents/formItem";

const _formatLabel = users => {
  const { list: userList } = users;

  if (!userList || !userList.length) return null;
  if (userList.length === 1) return userList[0].fullName;
  if (userList.length === 2)
    return `${userList[0].fullName} and ${userList[1].fullName}`;
  if (userList.length === 3)
    return `${userList[0].name.first}, ${userList[1].name.first} and ${
      userList[2].name.first
    }`;
  if (userList.length > 3)
    return `${userList[0].name.first}, ${
      userList[1].name.first
    } and ${userList.length - 2} others`;
};

const ListPlayersItem = ({ players, onPress }) => {
  return (
    <FormItem
      icon="add-players"
      text={`${players.length} partecipants`}
      note={_formatLabel(players)}
      onPress={onPress}
    >
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </FormItem>
  );
};

export default ListPlayersItem;
