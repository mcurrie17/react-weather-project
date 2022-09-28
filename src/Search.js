import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
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
      iconId: response.data.weather[0].id,
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
      <div className="Search">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit">{`🔍`}</button>
          </form>
        </div>
        <div className="container forecast mt-4">
          <WeatherInfo data={data} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
