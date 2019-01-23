import { StyleSheet } from "react-native";

// Color palette

export const colors = {
  primary: "#43a272",
  primaryLight: "#97dbb8",
  primaryLighter: "#c5efda",
  accent: "#f45f5f",
  accentLight: "#ff8787",
  accentLighter: "#ffb2b2",
  dark: "#1a051d",
  darkLight: "#3f3356",
  darkLighter: "#d0c9d6",
  gray: "#ecebed",
  grayLight: "#f7f5f9",
  white: "#ffffff",
  success: "#00c48c",
  successLight: "#7ddfc3",
  successLighter: "#d5f2ea",
  danger: "#ff647c",
  dangerLight: "#fdafbb",
  dangerLighter: "#fbe4e8",
  warning: "#ffcf5c",
  warningLight: "#ffe29d",
  warningLighter: "#fff8e7",
  shadow1: "rgba(0, 0, 0, 0.07)",
  shadow2: "rgba(208, 201, 214, 0.4)"
};

// Text styles

export const textStyles = StyleSheet.create({
  h1: {
    fontFamily: "Quicksand",
    fontSize: 34,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 41,
    letterSpacing: 0,
    color: colors.dark
  },
  h2: {
    fontFamily: "Quicksand",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    color: colors.dark
  },
  button1: {
    fontFamily: "Quicksand",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.dark
  },
  h4: {
    fontFamily: "Quicksand",
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.dark
  },
  button2: {
    fontFamily: "Quicksand",
    fontSize: 13,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    color: colors.dark
  },
  caption1: {
    fontFamily: "Quicksand",
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 16,
    letterSpacing: 0,
    color: colors.dark
  },
  caption2: {
    fontFamily: "Quicksand",
    fontSize: 11,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 13,
    letterSpacing: 0,
    color: colors.dark
  },
  body1: {
    fontFamily: "Quicksand",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20,
    letterSpacing: 0,
    color: colors.dark
  },
  body2: {
    fontFamily: "Quicksand",
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 18,
    letterSpacing: 0,
    color: colors.dark
  },
  small: {
    fontFamily: "Quicksand",
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 13,
    letterSpacing: 0,
    color: colors.dark
  }
});

export const shadows = StyleSheet.create({
  navBot: {
    shadowColor: "#D0C9D6",
    shadowOpacity: 1,
    shadowRadius: 0.4,
    shadowOffset: {
      width: 0,
      height: 1
    }
  }
});
