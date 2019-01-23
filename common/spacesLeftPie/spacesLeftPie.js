import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { colors } from "../../assets/styles/styles";
import { textStyles } from "../../assets/styles/styles";

const SpacesLeftPie = ({ match }) => {
  const fill = (match.numberOfPartecipants / match.totalNumberOfPlayers) * 100;
  const tintColor = fill === 100 ? colors.danger : colors.primary;
  const spacesLeft = match.totalNumberOfPlayers - match.numberOfPartecipants;
  const text = fill === 100 ? "full" : `${spacesLeft} left`;

  return (
    <AnimatedCircularProgress
      size={48}
      width={6}
      fill={fill}
      tintColor={tintColor}
      backgroundColor={colors.gray}
    >
      {() => <Text style={textStyles.small}>{text}</Text>}
    </AnimatedCircularProgress>
  );
};

export default SpacesLeftPie;
