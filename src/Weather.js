import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  function handleResponse(response) {
    setData({
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather.description,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="container pt-4">
          <h1>{data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={data.date} />
            </li>
            <li>Mostly Cloudy</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
              />
              {Math.round(data.temp)}° F
            </div>
            <div className="col-6">
              <ul>
                <li>Feels Like: {Math.round(data.feels)}° F</li>
                <li>Humidity: {data.humidity}%</li>
                <li>Wind: {Math.round(data.wind)} mph</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "095d2e824ddba0bb0037c48b7b065155";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
