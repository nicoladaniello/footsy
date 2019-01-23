// @flow

import color from "color";

import { Platform, Dimensions, PixelRatio, StyleSheet } from "react-native";

const colors = {
  color_primary: "#43a272",
  color_primaryLight: "#97dbb8",
  color_primaryLighter: "#c5efda",
  color_accent: "#f45f5f",
  color_accentLight: "#ff8787",
  color_accentLighter: "#ffb2b2",
  color_dark: "#1a051d",
  color_darkLight: "#3f3356",
  color_darkLighter: "#d0c9d6",
  color_gray: "#ecebed",
  color_grayLight: "#f7f5f9",
  color_white: "#ffffff",
  color_success: "#00c48c",
  color_successLight: "#7ddfc3",
  color_successLighter: "#d5f2ea",
  color_danger: "#ff647c",
  color_dangerLight: "#fdafbb",
  color_dangerLighter: "#fbe4e8",
  color_warning: "#ffcf5c",
  color_warningLight: "#ffe29d",
  color_warningLighter: "#fff8e7",
  color_shadow1: "rgba(0, 0, 0, 0.07)",
  color_shadow2: "rgba(208, 201, 214, 0.4)"
};

const textStyles = StyleSheet.create({
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
  h3: {
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

const shadows = StyleSheet.create({
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

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,

  ...colors,

  //Accordion
  headerStyle: "#edebed",
  iconStyle: "#000",
  contentStyle: "#f5f4f5",
  expandedIconStyle: "#000",
  accordionBorderColor: "#d3d3d3",

  // Android
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: "#ED1727",
  badgeColor: "#fff",
  badgePadding: 0,

  // Button
  btnFontFamily: "QuickSand",
  btnDisabledBg: "#b5b5b5",
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return 36;
  },
  get iconSizeSmall() {
    return 18;
  },

  // Card
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",
  cardBorderRadius: 2,
  cardItemPadding: platform === "ios" ? 10 : 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: "#039BE5",
  checkboxSize: 20,
  checkboxTickColor: "#fff",

  // Color
  brandPrimary: "#43A272",
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#000",
  brandLight: "#f4f4f4",

  //Container
  containerBgColor: "#fff",

  //Date Picker
  datePickerTextColor: "#000",
  datePickerBg: "transparent",

  // Font
  DefaultFontSize: textStyles.body1.fontSize,
  fontFamily: textStyles.body1.fontFamily,
  fontSizeBase: 15,
  fontSizeH1: textStyles.h1.fontSize,
  fontSizeH2: textStyles.h2.fontSize,
  fontSizeH3: textStyles.h3.fontSize,
  fontSizeBody2: textStyles.body2.fontSize,
  fontSizeSmall: textStyles.small.fontSize,

  fontWeightH2: textStyles.h2.fontWeight,
  fontWeightH3: textStyles.h3.fontWeight,

  lineHeightH2: textStyles.h2.lineHeight,
  lineHeightH3: textStyles.h3.lineHeight,

  // Footer
  footerHeight: 55,
  footerDefaultBg: "#43A272",
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: "#bfc6ea",
  tabBarTextSize: 11,
  activeTab: "#fff",
  sTabBarActiveTextColor: "#007aff",
  tabBarActiveTextColor: "#fff",
  tabActiveBgColor: "#43A272",

  // Header
  toolbarBtnColor: "#43A272",
  toolbarDefaultBg: "#fff",
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: "#43A272",
  searchBarHeight: platform === "ios" ? 30 : 40,
  searchBarInputHeight: platform === "ios" ? 40 : 50,
  toolbarBtnTextColor: "#43A272",
  toolbarDefaultBorder: "#fff",
  iosStatusbar: "dark-content",
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: "Ionicons",
  iconFontSize: 20,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: "#D9D5DC",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "#ed2f2f",
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#575757";
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,

  // List
  listBg: "transparent",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: 16,
  listItemPaddingHorizontal: 32,
  listNoteColor: "#808080",
  listNoteSize: 13,
  listItemSelected: "#43A272",

  // Progress Bar
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: "#43A272",
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: "#43A272",
  segmentActiveBackgroundColor: "#fff",
  segmentTextColor: "#fff",
  segmentActiveTextColor: "#43A272",
  segmentBorderColor: "#fff",
  segmentBorderColorMain: "#43A272",

  // Spinner
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",

  // Tab
  tabDefaultBg: "#fff",
  topTabBarTextColor: "#D0C9D6",
  topTabBarActiveTextColor: "#1A051D",
  topTabBarBorderColor: "#fff",
  topTabBarActiveBorderColor: "#F45F5F",

  // Tabs
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,

  // Text
  textColor: "#1A051D",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: "QuickSand",
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: "#1A051D",
  titleFontColor: "#1A051D",

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  //iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21
    }
  }
};
