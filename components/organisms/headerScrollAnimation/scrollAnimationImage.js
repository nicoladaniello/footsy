import React from "react";
import { Animated, StyleSheet } from "react-native";

const ScrollAnimationImage = ({
  image,
  scrollPosition,
  interpolation,
  refreshing
}) => {
  return (
    <Animated.View
      style={[
        styles.background,
        {
          transform: [{ translateY: interpolation }]
        }
      ]}
    >
      {image}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#24589A",
    height: 240,
    alignItems: "center",
    overflow: "hidden"
  }
});

export default ScrollAnimationImage;
