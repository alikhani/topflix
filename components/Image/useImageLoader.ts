import { useState, useEffect } from "react";

const defaultState = { image: undefined, status: "loading" };

export function useImageLoader(url: string) {
  var res = useState(defaultState);
  var image = res[0].image;
  var status = res[0].status;

  var setState = res[1];

  useEffect(
    function () {
      if (!url) return;
      const img = new Image();

      function onload() {
        setState({ image: img, status: "loaded" });
      }

      function onerror() {
        setState({ image: undefined, status: "failed" });
      }

      img.addEventListener("load", onload);
      img.addEventListener("error", onerror);
      //   crossOrigin && (img.crossOrigin = crossOrigin);
      img.src = url;

      return function cleanup() {
        img.removeEventListener("load", onload);
        img.removeEventListener("error", onerror);
        setState(defaultState);
      };
    },
    [url]
  );

  return [image, status];
}
