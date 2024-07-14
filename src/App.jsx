import { useEffect, useState } from "react";
import getFormattedWeatherData from "./Services/servicesWeather";
import { Forecast } from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

export default function App() {
  const [query, setQuery] = useState({ q: "buenos aires" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const changeBgDynamic = () => {
    if (!weather) return "from-black to-gray-800";

    const threshold = units === "metric" ? 25 : 60;
    if (weather.temp <= threshold) return "from-blue-500 to-blue-400";
    return "from-orange-400 to-yellow-600";
  };

  return (
    <>
      <div
        className={` mx-auto  w-[100%] min-h-screen text-white p-2 mt-0 bg-gradient-to-br shadow-xl shadow-gray-400 ${changeBgDynamic()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} />
            <Forecast title="PREVISIÓN DE 5 HORAS" data={weather.hourly} />
            <Forecast title="PREVISIÓN DIARIA" data={weather.daily} />
          </>
        )}
      </div>
    </>
  );
}
