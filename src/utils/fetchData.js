const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    return null;
  }
};
