import WeatherIcon from "react-icons-weather";
import React from "react";
import "animate.css";
import "./Icon.css";

export default function Icon(props) {
  return (
    <span>
      <WeatherIcon
        name="owm"
        iconId={props.apiId}
        flip="horizontal"
        rotate="90"
      />
    </span>
  );
}
