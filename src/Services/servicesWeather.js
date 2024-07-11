import { DateTime } from "luxon";

/* eslint-disable no-unused-vars */
const API_KEY = "172d39e32edcc5a0941af2d19368d634";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Esta funcion se encarga de hacer la llamada a la api y retorna la data en json
const getWeatherData = (infoType, searchParams) => {
  // infoType: Tipo de endpoint (Weather, Forecast)
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: API_KEY,
  });

  return fetch(url).then(res => res.json());
};
// obtenemos el icono
const iconUrlFromCode = icon =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

// Utilizo luxon para el formateo de horario
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Horario Local:' hh:mm a"
) =>
  DateTime.fromSeconds(secs + offset, { zone: "utc" })
    .setLocale("es")
    .toFormat(format);

// Función para convertir Kelvin a Celsius y redondear a un decimal
// const kelvinToCelsius = kelvin => (kelvin - 273.15).toFixed();

// Esta funcion saca la data necesaria y la formatea para retornarla a la funcion principal.
const formatCurrent = data => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { description, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp: temp,
    feels_like: feels_like,
    temp_min: temp_min,
    temp_max: temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    description,
    icon: iconUrlFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWather = (secs, offset, data) => {
  // hourly
  const hourly = data
    .filter(f => f.dt > secs)
    .slice(0, 5)
    .map(f => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  // daily
  const daily = data
    .filter(f => f.dt_txt.slice(-8) === "00:00:00")
    .map(f => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { hourly, daily };
};

// Esta es la funcion que se encarga de pasar toda la data formateada(embellesido)
const getFormattedWeatherData = async searchParams => {
  const formateddCurrenWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formateddCurrenWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then(d => formatForecastWather(dt, timezone, d.list)); //Para un endpoint diferente.
  // Retorna lo que devuelve la función formatCurrent
  return { ...formateddCurrenWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
