import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";
import UserService from "./userService";

export const signInWithGoogle = async () => {
  await GoogleSignin.configure();
  const data = await GoogleSignin.signIn();
  // create a new firebase credential with the token
  const credential = firebase.auth.GoogleAuthProvider.credential(
    data.idToken,
    data.accessToken
  );
  // login with credential
  const currentUser = await firebase.auth().signInWithCredential(credential);

  userService = new UserService();
  userService.save(getAppUserInfos(currentUser));

  return currentUser;
};

export const signOut = () => {
  return firebase.auth().signOut();
};

const getAppUserInfos = ({ additionalUserInfo }) => {
  return {
    isActive: true,
    name: additionalUserInfo.name,
    given_name: additionalUserInfo.given_name,
    family_name: additionalUserInfo.family_name,
    picture: additionalUserInfo.picture,
    email: additionalUserInfo.email
  };
};
