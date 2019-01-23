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
    ".primary": {
      color: variables.color_primary
    },
    fontSize: variables.iconFontSize,
    color: "#000"
  };

  return iconTheme;
};
