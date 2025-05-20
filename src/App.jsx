import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WeatherApp from "./pages/WeatherApp";
import BasicHooks from "./hooks/StateHook";
import UseEffectHook from "./hooks/useEffectHook";

const App = () => {
  return (
    <Router>
      <nav className="flex flex-row justify-end gap-7 font-medium p-4 bg-blue-500 text-lg">
        <Link to="/">Weather</Link>
        <Link to="/hooks">Hooks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="hooks" element={<BasicHooks />} />
        <Route path="effect" element={<UseEffectHook />} />
      </Routes>
    </Router>
  );
};

export default App;
