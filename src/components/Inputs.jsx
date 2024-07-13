/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import countries from "../countries.json";
// eslint-disable-next-line no-unused-vars
export default function Inputs({ setQuery, setUnits }) {
  const [city, setCity] = useState("");
  const handleClickInput = () => {
    if (city !== "") setQuery({ q: city });
  };
  const cc = () => {
    const countriesToObject = JSON.parse(countries);
    console.log(countriesToObject);
  };

  // cc();
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
      return;
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-center my-6">
        <div className="flex items-center w-3/4 justify-center space-x-4 ">
          <input
            value={city}
            onChange={e => setCity(e.currentTarget.value)}
            placeholder="buscar por ciudad o país"
            type="text"
            autoFocus={true}
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          />
          <BiSearch
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleClickInput}
          />
          <BiCurrentLocation
            size={40}
            className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocation}
          />
        </div>
      </div>
    </div>
  );
}
