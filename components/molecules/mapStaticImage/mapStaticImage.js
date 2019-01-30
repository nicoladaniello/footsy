import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { PropTypes } from "prop-types";

import { getStaticImage } from "../../../services/mapStaticImageService";
import AppMatch from "../../../models/appMatch";

const MapStaticImage = ({ match, style, ...rest }) => {
  return (
    <Image
      style={[styles.image, style]}
      {...rest}
      source={{ uri: getStaticImage({ coords: match.coords }) }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 240
  }
});

MapStaticImage.propTypes = {
  match: PropTypes.instanceOf(AppMatch).isRequired
};

export default MapStaticImage;
