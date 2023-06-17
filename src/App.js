import { useState } from "react";
import summer from "./images/summer.jpg";
import winter from "./images/winter.jpg";
import spring from "./images/spring.jpg";
import autumn from "./images/autumn.jpg";

import "./style.css";
const arr = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function App() {
  const [latitude, setLatitude] = useState("");

  const [longitude, setLongitude] = useState("");

  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState("");

  function getInformation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((locationObj) => {
        setLatitude(locationObj.coords.latitude);
        setLongitude(locationObj.coords.longitude);

        if (locationObj.coords.latitude > 0) {
          setHemisphere("Northern Hemisphare");
        } else if (locationObj.coords.latitude < 0) {
          setHemisphere("Southern Hemisphere");
        } else {
          setHemisphere("Equator");
        }
        setMonth(new Date().getMonth());
      });
    }
  }

  function ShowCondition() {
    console.log("working inside showcondition func");

    if (month !== "") {
      if (hemisphere === "Northern Hemisphare") {
        if (month >= 2 && month <= 4) {
          return (
            <>
              <h1>Spring Season</h1>
              <img src={spring} alt="" />
            </>
          );
        } else if (month >= 5 && month <= 7) {
          console.log("working in month  condition summer");

          return (
            <>
              <h1>Summer Season</h1>
              <img src={summer} alt="" />
            </>
          );
        } else if (month >= 8 && month <= 10) {
          return (
            <>
              <h1>Autumn Season</h1>
              <img src={autumn} alt="" />
            </>
          );
        } else {
          return (
            <>
              <h1>Winter Season</h1>
              <img src={winter} alt="" />
            </>
          );
        }
      } else {
        if (month >= 2 && month <= 4) {
          return (
            <>
              <h1>Autumn Season</h1>
              <img src={autumn} alt="" />
            </>
          );
        } else if (month >= 5 && month <= 7) {
          return (
            <>
              <h1>Winter Season</h1>
              <img src={winter} alt="" />
            </>
          );
        } else if (month >= 8 && month <= 10) {
          return (
            <>
              <h1>Spring Season</h1>
              <img src={spring} alt="" />
            </>
          );
        } else {
          return (
            <>
              <h1>Summer Season</h1>
              <img src={summer} alt="" />
            </>
          );
        }
      }
    }
  }

  console.log("working inside component");
  return (
    <div className="box">
      {month !== "" && (
        <>
          <h1>{hemisphere}</h1>
          <h3>Lat: {latitude}</h3>
          <h3>Long:{longitude}</h3>
          <h3>Month:{arr[month]}</h3>
          {console.log(hemisphere)}
        </>
      )}
      <ShowCondition />
      {console.log("working after show func call")}

      <button onClick={getInformation}>GetInfo</button>
      {console.log("working after button")}
    </div>
  );
}

export default App;