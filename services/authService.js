import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";
import UserService from "./userService";

async function signInWithGoogle() {
  try {
    await GoogleSignin.configure();
    const data = await GoogleSignin.signIn();
    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(
      data.idToken,
      data.accessToken
    );
    // login with credential
    const UserCredential = await firebase
      .auth()
      .signInWithCredential(credential);
    // update user details in db
    const user = await _getAppUserAndUpdateDB(UserCredential.user);

    return user;
  } catch (ex) {
    console.error(ex);
  }
}

async function signOut() {
  return firebase.auth().signOut();
}

function getCurrentUser() {
  firebase.auth.getCurrentUser();
}

async function _getAppUserAndUpdateDB({ displayName, email, photoURL, uid }) {
  const user = {
    isActive: true,
    name: displayName,
    photoURL,
    email
  };

  await UserService.save(uid, user);
  return user;
}

export default {
  signInWithGoogle,
  signOut,
  getCurrentUser
};
