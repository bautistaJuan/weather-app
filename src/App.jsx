import { useEffect, useState } from "react";
import getFormattedWeatherData from "./Services/servicesWeather";
import { Forecast } from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

export default function App() {
  const [query, setQuery] = useState({ q: "buenos aires" });
  const [units, setUnits] = useState("metrics");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);
  return (
    <>
      <div className="mx-auto max-w-screen-lg text-white mt-4 py-6 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
        <TopButtons setQuery={setQuery} />
        <Inputs />
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
