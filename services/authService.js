import { AsyncStorage } from "react-native";
import jwtDecode from "jwt-decode";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaW1nIjoiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MjIwNzU0Njk3NTEtM2E2Njk0ZmIyZjYxP2l4bGliPXJiLTAuMy41Jml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmcz0zY2NjMTgwMWZkOTFkYzljZjg2OWZhNmEwOTM2MGMwOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwMCZxPTgwIiwiaWF0IjoxNTE2MjM5MDIyfQ.sWk-yasKVy58NheaEjZnenwVy4YekzfBiUGfaWgYcNg";

export async function signInWithSocial() {
  const { data: userToken } = await _httpSigIn();
  await AsyncStorage.setItem("userToken", userToken);
}

export function signOut() {
  return AsyncStorage.removeItem("userToken");
}

export async function getCurrentUser() {
  const userToken = await AsyncStorage.getItem("userToken");
  const user = jwtDecode(userToken);
  return user;
}

const _httpSigIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: token });
    }, 200);
  });
};
