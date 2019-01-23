// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    },
    ".small": {
      fontSize: variables.fontSizeSmall
    },
    ".sub": {
      fontSize: variables.fontSizeBody2
    },
    ".center": {
      textAlign: "center"
    }
  };

  return textTheme;
};
