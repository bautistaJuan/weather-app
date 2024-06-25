// eslint-disable-next-line no-unused-vars
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

export default function Inputs() {
  return (
    <div>
      <div className="flex flex-row justify-center my-6">
        <div className="flex items-center w-3/4 justify-center space-x-4 ">
          <input
            placeholder="buscar por ciudad o país"
            type="text"
            autoFocus={true}
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase"
          />
          <BiSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
          <BiCurrentLocation
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °C
          </button>
          <p className="text-2xl font-medium mx-1">|</p>
          <button className="text-2xl font-medium transition ease-out hover:scale-125">
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
