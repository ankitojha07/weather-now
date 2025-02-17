import { useState } from "react";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";
import { fetchWeatherData } from "../utils/fetchData.js"; // Import the function

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <InputCard onSearch={handleSearch} />
      <OutputCard weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
