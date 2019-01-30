import { PixelRatio } from "react-native";
import { MapsOptions } from "../enviroment";

// google api endpoint
const baseUrl = "https://maps.googleapis.com/maps/api/staticmap?";

export const getStaticImage = ({
  coords,
  width = 400,
  height = 240,
  zoom = 15,
  markerSize = "mid"
}) => {
  const marker = encodeURI(
    `size:${markerSize}|${coords.latitude},${coords.longitude}`
  );
  const params = {
    zoom,
    center: `${coords.latitude},${coords.longitude}`,
    size: `${width}x${height}`,
    scale: PixelRatio.get() > 1 ? 2 : 1,
    key: MapsOptions.publicKey,
    markers: marker
  };

  // params to url formatting
  let formattedParams = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&");

  const url = baseUrl + formattedParams;
  console.log(url);
  return url;
};
