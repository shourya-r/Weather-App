import { useState } from "react";
import useWeatherInfo from "./hooks/useWeatherInfo";

function App() {
  const [location, setLocation] = useState("London");

  const weatherInfo = useWeatherInfo(location);
  return (
    <>
      <div>
        <div className="flex flex-wrap">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLocation(location);
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
        <div className="flex flex-wrap px-16 py-16">
          <div>{}</div>
        </div>
      </div>
    </>
  );
}

export default App;
