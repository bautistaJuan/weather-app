export const Forecast = () => {
  const mock = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-semibold uppercase text-[20px]">
          3 hour step forecast
        </p>
      </div>
      <hr className="my-1" />
      <div className=" flex items-center justify-between">
        {mock.map((v, i) => (
          <div key={i} className=" flex flex-col items-center justify-center">
            <p className="font-light text-sm">Wed</p>
            <p className=" rounded-full p-1 bg-orange-600 my-4 w-10 h-10"></p>
            <p className=" font-medium">11°</p>
          </div>
        ))}
      </div>
    </div>
  );
};
