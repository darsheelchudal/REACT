import { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const fetchWeatherData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7296d109e0ead1aac198cb95749ea2a`
    );
    setData(response.data);
    console.log(response.data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };
  return (
    <div className="mx-auto max-w-[1240px] p-3 mt-2 shadow-xl bg-blue-100">
      <h1 className="text-center text-red-400 bold">
        ENTERED CITY: {city.toUpperCase()}
      </h1>

      <div class="mx-auto mt-5 w-screen max-w-screen-md py-5 leading-6">
        <form
          class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
          onSubmit={handleSubmit}
        >
          <svg
            class="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input
            type="text"
            name="search"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="City"
          />
          <button
            type="submit"
            class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-center">
        <h1 className="font-sans text-2xl font-bold text-blue-400">
          Enter your city :
        </h1>
      </div>

      <div className="flex justify-around">
        <div className="MaxTemp">
          <h1>Min temp : {data.main && data.main.temp_min} </h1>
          <h1>Humidity : {data.main && data.main.humidity}</h1>
        </div>

        <div className="MinTemo">
          <h1>Max Temp: {data.main && data.main.temp_max} </h1>
          <h1>Precipitation : {data.weather && data.weather[0].description}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
