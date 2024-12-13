import { useState } from "react";
import useWeatherInfo from "./hooks/useWeatherInfo";

function App() {
  const [location, setLocation] = useState("London");
  const [sentLocation, setSentLocation] = useState("London");
  const weatherInfo = useWeatherInfo(sentLocation);
  return (
    <>
      <div>
        <div className="flex flex-wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLocation(location);
              setSentLocation(location);
            }}
            className="flex justify-end w-full px-4 py-6"
          >
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="py-2 text-lg px-3 rounded-xl"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="px-20 py-20">
          <div className="flex flex-wrap mb-5">
            <div className="text-5xl font-extrabold mr-5">
              {weatherInfo["address"]}
            </div>
            <div className="text-5xl font-extrabold">
              {weatherInfo["timezone"]}
            </div>
          </div>
          <div className="text-3xl font-bold mb-7">{weatherInfo["date"]}</div>
          <div className="flex flex-wrap">
            <div className="text-8xl mr-7">
              {weatherInfo["temperature"]} &deg;F
            </div>
            <div className="text-xl font-bold py-2">
              <div>Feels Like: {weatherInfo["feelslike"]} &deg;F</div>
              <div>Humidity: {weatherInfo["humidity"]}%</div>
              <div>Wind: {weatherInfo["wind"]} MPH</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
