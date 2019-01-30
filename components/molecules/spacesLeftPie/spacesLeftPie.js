import React from "react";
import { Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const SpacesLeftPie = ({ match }) => {
  const fill = (match.playersCount / match.playersLimit) * 100;
  const tintColor = fill === 100 ? "#ff647c" : "#43a272";
  const spacesLeft = match.playersLimit - match.playersCount;
  const text = fill === 100 ? "full" : `${spacesLeft} left`;

  return (
    <AnimatedCircularProgress
      size={48}
      width={6}
      fill={fill}
      tintColor={tintColor}
      backgroundColor={"#ecebed"}
    >
      {() => <Text small>{text}</Text>}
    </AnimatedCircularProgress>
  );
};

export default SpacesLeftPie;
