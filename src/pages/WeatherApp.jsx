import { useState } from "react";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching the weather data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <InputCard onSearch={handleSearch} />
      <OutputCard weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
