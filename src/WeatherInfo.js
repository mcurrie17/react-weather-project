import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo pt-4">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          {Math.round(props.data.temp)}° F
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(props.data.feels)}° F</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
