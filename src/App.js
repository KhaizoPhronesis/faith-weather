import "./App.css";
import TopButton from "./components/TopButton";
import LocationInfo from "./components/LocationInfo"
import TempDetails from "./components/TempDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./Service/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./components/TopBar";

function App() {
  const [query, setQuery] = useState({ q: "abuja" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery} />
      <TopBar setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <LocationInfo weather={weather} />
          <TempDetails weather={weather} />

          <Forecast title="Daily forecast" items={weather.daily} />
          <Forecast title="Hourly forecast" items={weather.hourly} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;