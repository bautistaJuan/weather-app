/* eslint-disable react/prop-types */
export const Forecast = ({ title, data }) => {
  console.log(title, data);

  return (
    <div className="p-4">
      <div className="flex items-center justify-start mt-6">
        <p className="font-semibold uppercase text-[20px]">{title}</p>
      </div>
      <hr className="my-1" />
      <div className=" flex items-center justify-between p-4">
        {data.map((v, i) => (
          <div
            key={i}
            className=" flex flex-col items-center justify-center text-center"
          >
            <p className="font-light text-sm">{v.title}</p>
            <img src={v.icon} alt="weather icon" className=" w-12 my-1" />
            <p className=" font-medium">{v.temp.toFixed()}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};
