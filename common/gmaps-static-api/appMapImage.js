import React from "react";
import { Image, PixelRatio } from "react-native";
import { MapsOptions } from "../../enviroment";

const AppMapImage = ({ match, ...rest }) => {
  const baseUrl = "https://maps.googleapis.com/maps/api/staticmap?";

  const locationParams = {
    // center: encodeURI(match.address.description),
    zoom: 15
  };

  const mapParams = {
    size: `${400}x${400}`,
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
    console.log(url);
    return url;
  };

  return <Image {...rest} source={{ uri: getImageUrl() }} />;
};

export default AppMapImage;
