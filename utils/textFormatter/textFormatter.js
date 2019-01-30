export const formatTextUsers = users => {
  const { list: userList } = users;

  if (!userList || !userList.length) return null;

  if (userList.length === 1) return userList[0].name;
  else return `${userList[0].name} and ${userList.length - 1} others`;
};
