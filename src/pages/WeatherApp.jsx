import { useState } from "react";
import InputCard from "../components/InputCard";
import OutputCard from "../components/OutputCard";
import { fetchWeatherData } from "../utils/fetchData.js"; // Import the function

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(''); // State for storing error message

  const handleSearch = async (city) => {
    if (!city) {
      setError("City name cannot be empty 🌆❌"); // Show error if city is empty
      setWeatherData(null);
      return;
    }

    setError(''); // Reset error before fetching new data
    const data = await fetchWeatherData(city);

    if (data && data.error) {
      setError(data.error); // Show error returned from the API
      setWeatherData(null);
    } else {
      setWeatherData(data); // Set weather data if successful
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 p-4">
      <InputCard onSearch={handleSearch} />
      <OutputCard weatherData={weatherData} error={error} /> {/* Pass error to OutputCard */}
    </div>
  );
};

export default WeatherApp;
