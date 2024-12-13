import { useEffect, useState } from "react";
import { removeSpaces, addSpaces } from ".";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function useWeatherInfo(location) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${removeSpaces(
        location
      )}/?key=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) =>
        setData({
          address: res["address"],
          timezone: res["timezone"],
          date: res["days"][0]["datetime"],
          temperature: res["days"][0]["temp"],
          feelslike: res["days"][0]["feelslike"],
          humidity: res["days"][0]["humidity"],
          wind: res["days"][0]["windspeed"],
        })
      );
  }, [location]);

  return data;
}

export default useWeatherInfo;
