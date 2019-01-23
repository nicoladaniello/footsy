import { StyleSheet } from "react-native";
import { textStyles, shadows, colors } from "./styles";

export default (matchItemStyle = StyleSheet.create({
  Item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 96,
    marginBottom: 1,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: colors.white,
    ...shadows.navBot
  },
  left: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // backgroundColor: "red"
  },
  leftTitle: {
    textAlign: "center",
    ...textStyles.body2
  },
  leftSubtitle: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    ...textStyles.small
  },
  body: {
    width: "55%",
    display: "flex"
    // backgroundColor: "blue"
  },
  organiser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    ...textStyles.small
  },
  right: {
    width: "25%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // backgroundColor: "red"
  },
  rightTitle: {
    textAlign: "center"
  },
  rightSubtitle: {
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    ...textStyles.small
  }
}));
