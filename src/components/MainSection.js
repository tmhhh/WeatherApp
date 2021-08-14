import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { useState, useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";
const inputSectionStyle = {
  color: "white",
  display: "flex",
  justifyContent: "center",
};
const inputStyle = {
  borderStyle: "none",
  marginLeft: "3px",
  borderBottom: "1px solid white",
  background: "transparent",
  color: "white",
};

const weatherInfoStyle = {
  textAlign: "center",
  marginTop: "50px",
  borderBottom: "1px solid white",
};

export default function MainSection() {
  const [input, setInput] = useState("");
  const { weatherData, submitLocation } = useContext(WeatherContext);
  // console.log(weatherData);
  // const imageIcon = weatherData.weather[0].icon;
  console.log("re rendered");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitLocation(e.target.value);
      setInput("");
    }
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div style={inputSectionStyle} className="input-section">
        <FontAwesomeIcon icon={faSearch} />
        <input
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
          id="inputLocation"
          style={inputStyle}
          value={input}
          type="text"
          placeholder="Input your location ..."
        ></input>
      </div>
      <div style={weatherInfoStyle} className="weatherInfo-section">
        <img
          src={
            Object.keys(weatherData).length > 0
              ? `http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`
              : null
          }
          height={200}
          width={200}
        />
        <p>
          {Object.keys(weatherData).length > 0 ? weatherData.data.name : " "}
        </p>
        <p className="weather-temp">
          {Object.keys(weatherData).length > 0
            ? weatherData.data.main.temp
            : " "}
        </p>
      </div>
    </div>
  );
}
