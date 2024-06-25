/* eslint-disable no-unused-vars */
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function TempAndDetails() {
  const verticalItems = [
    {
      id: 1,
      name: "Sensación Térmica",
      Icon: FaThermometerEmpty,
      value: "22°",
    },
    {
      id: 2,
      name: "Humedad",
      Icon: BiSolidDropletHalf,
      value: "70%",
    },
    {
      id: 3,
      name: "Viento",
      Icon: FiWind,
      value: "11 km/h",
    },
  ];
  const horizontalItems = [
    {
      id: 1,
      name: "Amanecer",
      Icon: GiSunrise,
      value: "7:00 AM",
    },
    {
      id: 2,
      name: "Atardecer",
      Icon: GiSunset,
      value: "18:00 PM",
    },
    {
      id: 3,
      name: "Máxima",
      Icon: MdKeyboardArrowUp,
      value: "28°",
    },
    {
      id: 4,
      name: "Minima",
      Icon: MdKeyboardArrowDown,
      value: "10°",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Soleado</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="Weather Icon"
          className="w-20"
        />
        <p className="text-5xl">22°</p>
        <div className="flex flex-col space-y-3 items-start">
          {verticalItems.map(({ Icon, name, id, value }) => {
            return (
              <>
                <div
                  key={id}
                  className="flex font-light text-sm items-center justify-center"
                >
                  <Icon size={18} className="mr-1" />
                  {name}: <span className="font-medium ml-1">{value}</span>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalItems.map(({ Icon, name, id, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            {name}:<span className="font-light ml-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
