// @flow

import { Platform, PixelRatio } from "react-native";

import pickerTheme from "./Picker";
import variable from "./../variables/platform";

export default (variables /*: * */ = variable) => {
  const platform = variables.platform;
  const selectedStyle = {
    "NativeBase.Text": {
      color: variables.listItemSelected
    },
    "NativeBase.Icon": {
      color: variables.listItemSelected
    }
  };

  const listItemTheme = {
    ".header": {
      "NativeBase.Body": {
        "NativeBase.Text": {
          ".note": {
            fontSize: variables.fontSizeH3,
            fontWeight: variables.fontWeightH3,
            lineHeight: variables.lineHeightH3,
            marginBottom: variables.lineHeightH3 / 2,
            color: variables.color_darkLight
          },
          fontSize: variables.fontSizeH2,
          fontWeight: variables.fontWeightH2,
          lineHeight: variables.lineHeightH2,
          marginBottom: variables.lineHeightH2 / 2
        }
      },
      paddingBottom: variables.listItemPadding / 2
    },
    ".matchItem": {
      "NativeBase.Left": {
        alignSelf: null,
        flexGrow: 0.2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: variables.listItemPaddingHorizontal
      },
      "NativeBase.Body": {
        "NativeBase.View": {
          ".organiser": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }
        },
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between"
      },
      "NativeBase.Right": {
        alignSelf: null,
        flexGrow: 0.1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
      },
      alignItems: "stretch",
      paddingLeft: variables.listItemPaddingHorizontal / 2,
      paddingBottom: variables.listItemPadding / 2,
      paddingRight: 0,
      height: 96
    },
    "NativeBase.Left": {
      "NativeBase.Icon": {
        fontSize: variables.iconFontSize
      },
      flexDirection: "row"
    },
    "NativeBase.Body": {
      alignSelf: null,
      alignItems: null
    },
    "NativeBase.Right": {
      "NativeBase.Icon": {
        alignSelf: null
      },
      flex: 0
    },
    ".avatar": {
      "NativeBase.Left": {
        flex: 0,
        alignSelf: "flex-start",
        paddingTop: variables.listItemPadding - 12,
        paddingRight: variables.listItemPadding
      },
      paddingLeft: variables.listItemPaddingHorizontal - 12
    },
    ".thumbnail": {
      "NativeBase.Left": {
        flex: 0
      },
      "NativeBase.Body": {
        "NativeBase.Text": {
          marginLeft: null
        },
        flex: 1,
        marginLeft: variables.listItemPadding + 5,
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: variables.listBorderColor
      },
      "NativeBase.Right": {
        "NativeBase.Button": {
          ".transparent": {
            "NativeBase.Text": {
              fontSize: variables.listNoteSize,
              color: variables.sTabBarActiveTextColor
            }
          },
          height: null
        },
        flex: 0,
        justifyContent: "center",
        alignSelf: "stretch",
        paddingRight: variables.listItemPadding + 5,
        paddingVertical: variables.listItemPadding + 5,
        borderBottomWidth: variables.borderWidth,
        borderColor: variables.listBorderColor
      },
      ".noBorder": {
        "NativeBase.Body": {
          borderBottomWidth: null
        },
        "NativeBase.Right": {
          borderBottomWidth: null
        }
      },
      borderBottomWidth: null,
      paddingVertical: null,
      paddingRight: null
    },
    ".icon": {
      "NativeBase.Left": {
        "NativeBase.Icon": {
          fontSize: variables.iconFontSize
        },
        paddingRight: variables.listItemPadding,
        flex: 0,
        justifyContent: "center",
        alignItems: "center"
      }
    },
    alignItems: "center",
    flexDirection: "row",
    paddingRight: variables.listItemPaddingHorizontal,
    paddingLeft: variables.listItemPaddingHorizontal,
    backgroundColor: variables.listBg,
    paddingVertical: variables.listItemPadding,
    borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderColor: variables.listBorderColor
  };

  return listItemTheme;
};
