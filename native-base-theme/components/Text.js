// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
