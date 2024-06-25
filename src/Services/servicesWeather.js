import { DateTime } from "luxon";

/* eslint-disable no-unused-vars */
const API_KEY = "172d39e32edcc5a0941af2d19368d634";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Esta funcion se encarga de hacer la llamada a la api y retorna la data en json
const getWeatherData = (infoType, searchParams) => {
  // infoType: Tipo de endpoint (Weather, Forecast)
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then(res => res.json());
};
// obtenemos el icono
const iconUrlFromCode = icon =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

// Utilizo luxon para el formateo de horario
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time:'hh:mm"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

// Esta funcion saca la data necesaria y la formatea para retornarla a la funcion principal.
const formatCurrent = data => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconUrlFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWather = (secs, offset, data) => {};

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
  return { ...formateddCurrenWeather };
};

export default getFormattedWeatherData;
