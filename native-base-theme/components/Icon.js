// @flow

import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const iconTheme = {
    ".small": {
      fontSize: variables.iconSizeSmall
    },
    ".large": {
      fontSize: variables.iconSizeLarge
    },
    fontSize: variables.iconFontSize,
    color: "#000"
  };

  return iconTheme;
};
