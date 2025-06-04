"use client";

import React from "react";
import GoogleMapReact from "google-map-react";

type AnyReactComponentProps = {
  text: string;
  lat: number;
  lng: number;
};

const AnyReactComponent = ({ text }: AnyReactComponentProps) => (
  <div>{text}</div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 53.33195821780762,
      lng: -6.271764949261871,
    },
    zoom: 18,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBho8CyIwh4l_JeVPq8ZJLdXFSFgkZ0UQY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={53.33195821780762}
          lng={-6.271764949261871}
          text="Here!"
        />
      </GoogleMapReact>
    </div>
  );
}
