import { useState } from "react";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";
import { fetchWeatherData } from "../utils/fetchData.js";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setError("");
    const data = await fetchWeatherData(city);

    if (data && data.error) {
      setError(data.error);
      setWeatherData(null);
    } else {
      setWeatherData(data);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <InputCard onSearch={handleSearch} />
      <OutputCard weatherData={weatherData} error={error} />{" "}
    </div>
  );
};

export default WeatherApp;
