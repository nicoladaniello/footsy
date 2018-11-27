import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";
import AppUser from "../common/appUser";
import * as userService from "./userService";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiX2lkIjoiNWJmYjAxYTI3YTUyYzM1NjI2ZTk0ODQzIiwiaWF0IjoxNTE2MjM5MDIyfQ.fwadRV6Ouhjo_djVjlTdbV7vwfPMQYpzuXsMedTP65s";

export async function signInWithSocial() {
  const { data: userToken, user } = await _httpSigIn();
  if (!userToken || !user) throw new Error("Login failed.");

  await AsyncStorage.multiSet([
    ["userToken", userToken],
    ["currentUser", JSON.stringify(user)]
  ]);
}

export function signOut() {
  return AsyncStorage.multiRemove(["userToken", "currentUser"]);
}

export async function getCurrentUser() {
  const currentUser = await AsyncStorage.getItem("currentUser");
  return JSON.parse(currentUser);
}

// server side implementing this
const _httpSigIn = async () => {
  const { _id } = jwtDecode(token);
  const user = await userService.getUserServerSide(_id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: token, user });
    }, 200);
  });
};
