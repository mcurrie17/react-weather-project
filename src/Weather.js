import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [data, setData] = useState({ ready: false });
  function handleResponse(response) {
    setData({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather.description,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "095d2e824ddba0bb0037c48b7b065155";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
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
        <WeatherInfo data={data} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
