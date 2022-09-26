import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("imperial");

  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertIt() {
    return (props.imperial / 9) * 5 - 32;
  }

  if (unit === "imperial") {
    return (
      <span>
        <span className="tempDisplay">{Math.round(props.imperial)}</span>
        <span className="unitDisplay">
          <a href="/" onClick={showMetric}>
            °F
          </a>{" "}
          | C°
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="tempDisplay">{Math.round(convertIt())}</span>
        <span className="unitDisplay">
          °F |{" "}
          <a href="/" onClick={showImperial}>
            C°
          </a>
        </span>
      </span>
    );
  }
}
