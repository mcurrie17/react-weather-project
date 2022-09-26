import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hrs = props.date.getHours();
  let ampm = hrs >= 12 ? "pm" : "am";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  let mins = props.date.getMinutes();
  mins = mins.toString().padStart(2, "0");

  return (
    <div>
      {day} {hrs}:{mins} {ampm}
    </div>
  );
}
