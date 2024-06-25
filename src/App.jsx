// import getFormattedWeatherData from "./Services/servicesWeather";
import { Forecast } from "./components/Forecast";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";

export default function App() {
  // const getWeather = async () => {
  //   const data = await getFormattedWeatherData({ q: "argentina" });
  //   console.log(data);
  // };
  // getWeather();
  return (
    <>
      <div className="mx-auto max-w-screen-lg text-white mt-4 py-6 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast />
        <Forecast />
      </div>
    </>
  );
}
