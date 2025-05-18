import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WeatherApp from "./pages/WeatherApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
};

export default App;
