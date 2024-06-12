export default function TopButtons() {
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
      name: "Paraguay",
    },
    {
      id: 5,
      name: "Peru",
    },
  ];

  return (
    <div className=" flex items-center justify-around my-6 ">
      {cities.map(c => (
        <button
          key={c.id}
          className=" text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in "
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
