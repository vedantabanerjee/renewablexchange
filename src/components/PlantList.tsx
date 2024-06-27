import React from "react";

const PlantList: React.FC = () => {
  const topPlants = [
    {
      id: 1,
      name: "Matayeen SHP",
      location: "Kargil",
      powerGenerated: "0.55 MW",
    },
    {
      id: 2,
      name: "Henache SHP",
      location: "Ladakh",
      powerGenerated: "0.60 MW",
    },
    {
      id: 3,
      name: "Ani SHP",
      location: "Ani region of Himachal Pradesh",
      powerGenerated: "5.00 MW",
    },
    {
      id: 4,
      name: "Beas Kund Top SHP",
      location: "Himachal Pradesh",
      powerGenerated: "4.00 MW",
    },
    {
      id: 5,
      name: "Rayil SHP ",
      location: "Rayil region",
      powerGenerated: "2.00 MW",
    },
  ];

  const topUpcomingPlants = [
    {
      id: 1,
      name: "Fatehgarh-III substation",
      location: "Rajasthan",
      powerGenerated: "500 MW",
    },
    {
      id: 2,
      name: "Rajanandgaon Solar PV Power Plant",
      location: "Chhattisgarh",
      powerGenerated: "100 MW (AC)",
    },
    {
      id: 3,
      name: "Taru Solar PV Power Plant",
      location: "Leh, UT of Ladakh",
      powerGenerated: "20 MW (AC)",
    },
    {
      id: 4,
      name: "Lakshadweep SPV Project",
      location: "Lakshadweep",
      powerGenerated: "1.95 MWp",
    },
    {
      id: 5,
      name: "Kavaratti, Agatti, Bangaram, Thinnakara SPV Project",
      location: "Lakshadweep",
      powerGenerated: "1.95 MWp",
    },
  ];

  return (
    <div className="flex gap-3 p-3">
      <div className="w-full  bg-white rounded-lg shadow-lg p-8 mb-5">
        <h2 className="text-2xl font-bold mb-4">
          Top 5 Microgrids Producing Green Energy
        </h2>
        <ul className="divide-y divide-gray-200">
          {topPlants.map((plant) => (
            <li key={plant.id} className="py-4">
              <h3 className="text-lg font-medium">{plant.name}</h3>
              <p className="text-sm text-gray-600">{plant.location}</p>
              <p className="text-sm text-gray-600">
                <b>Power Generated:</b> {plant.powerGenerated}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-white rounded-lg shadow-lg p-8 mb-5">
        <h2 className="text-2xl font-bold mb-4">
          Top 5 Upcoming Microgrids producing Green Energy
        </h2>
        <ul className="divide-y divide-gray-200">
          {topUpcomingPlants.map((plant) => (
            <li key={plant.id} className="py-4">
              <h3 className="text-lg font-medium">{plant.name}</h3>
              <p className="text-sm text-gray-600">{plant.location}</p>
              <p className="text-sm text-gray-600">
              <b>Power Generated:</b> {plant.powerGenerated}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlantList;
