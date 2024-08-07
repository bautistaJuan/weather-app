/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function TempAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
}) {
  const verticalItems = [
    {
      id: 1,
      name: "Sensación Térmica",
      Icon: FaThermometerEmpty,
      value: feels_like,
    },
    {
      id: 2,
      name: "Humedad",
      Icon: BiSolidDropletHalf,
      value: `${humidity}%`,
    },
    {
      id: 3,
      name: "Viento",
      Icon: FiWind,
      value: `${speed} km/h`,
    },
  ];
  const horizontalItems = [
    {
      id: 1,
      name: "Amanecer",
      Icon: GiSunrise,
      value: sunrise,
    },
    {
      id: 2,
      name: "Atardecer",
      Icon: GiSunset,
      value: sunset,
    },
    {
      id: 3,
      name: "Máxima",
      Icon: MdKeyboardArrowUp,
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      name: "Minima",
      Icon: MdKeyboardArrowDown,
      value: `${temp_min.toFixed()}°`,
    },
  ];
  const ItemsArea = () => {
    return (
      <>
        <div className="flex flex-col space-y-3 items-start ">
          {verticalItems.map(({ Icon, name, id, value }) => {
            return (
              <div
                key={id}
                className="flex font-light text-sm items-center justify-center"
              >
                <Icon size={20} className="mr-1" />
                {name}: <span className="font-medium ml-1">{value}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details} </p>
      </div>

      <div className="flex flex-row  items-center justify-center gap-3  py-3 flex-wrap">
        <img src={icon} alt="Weather Icon" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <ItemsArea />
      </div>
      <div className="flex flex-row items-center justify-center sm:space-x-10 text-sm w-[100%]">
        {horizontalItems.map(({ Icon, name, id, value }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center w-[100px] text-center py-2"
          >
            <Icon size={30} />
            {name}:<span className="font-light ml-1 w-[100%]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
