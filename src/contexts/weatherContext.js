import React, { useEffect, useState } from "react";
import axios from "axios";
const apikey = "1644e9db234a4af5a008eec252dd6c04";
export const WeatherContext = React.createContext();
const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  //
  const submitLocation = (value) => {
    setLocation(value);
    // console.log(location);
  };
  useEffect(() => {
    console.log("áđâsdsđa");
    if (location !== "") {
      console.log("Get data");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`
        )
        .then((data) => {
          setWeatherData(data);
          // console.log(weatherData.weather[0].icon);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [location]);

  //context data
  const WeatherContextData = {
    weatherData,
    submitLocation,
  };
  return (
    <WeatherContext.Provider value={WeatherContextData}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
