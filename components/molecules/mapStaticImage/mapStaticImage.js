import React from "react";
import { Image, Dimensions, PixelRatio, StyleSheet } from "react-native";
import { getStaticImage } from "../../../services/mapStaticImageService";
import { MapsOptions } from "../../../enviroment";

const MapStaticImage = ({ match, style, ...rest }) => {
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap?";

  const locationParams = {
    // center: encodeURI(match.address.description),
    zoom: 15
  };

  const mapParams = {
    size: `${400}x${240}`,
    scale: PixelRatio.get() > 1 ? 2 : 1
  };

  const mapOptions = {
    key: MapsOptions.publicKey
  };

  const markers = {
    size: "mid",
    "": encodeURI(match.address.description)
  };

  const getImageUrl = () => {
    const params = { ...locationParams, ...mapParams, ...mapOptions };
    let formattedParams = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join("&");

    if (markers) {
      formattedParams +=
        "&markers=" +
        Object.keys(markers)
          .map(key => `${key}:${markers[key]}`)
          .join("%7c");
    }
    const url = baseUrl + formattedParams;
    return url;
  };

  return (
    <Image
      style={[styles.image, style]}
      {...rest}
      source={{ uri: getStaticImage({ address: match.address }) }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: 240
  }
});

export default MapStaticImage;
