// eslint-disable-next-line react/prop-types
export default function TopButtons({ setQuery }) {
  // Funciona correctamente:
  // useEffect(() => {
  //   setQuery({ q: "Paraguay" });
  // }, [setQuery]);

  const cities = [
    {
      id: 1,
      name: "Uruguay",
    },
    {
      id: 2,
      name: "Argentina",
    },
    {
      id: 3,
      name: "Chile",
    },
    {
      id: 4,
      name: "Cuba",
    },
    {
      id: 5,
      name: "Peru",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 flex-wrap ">
      {cities.map(c => (
        <button
          key={c.id}
          className=" text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in "
          onClick={() => setQuery({ q: c.name })}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
