"use client"; // This is essential to avoid compile time error since the code uses useEffect

import React, { useState, useEffect } from "react";
import Map from "@/components/Map";
import PlantList from "@/components/PlantList";
import EnergyPrice from "@/components/EnergyPrice";
import MicrogridCard from "@/components/MicroGrid";

const microgrids = [
  {
    id: 1,
    name: "Umlung",
    lat: 33.8687719,
    lng: 77.4637938,
    energy: "3.2kW",
    stored: "12.141kw",
    developer: "LREDA",
    type: "Solar"
  },
  {
    id: 2,
    name: "Digar",
    lat: 34.294001,
    lng: 77.8064628,
    energy: "10kW",
    stored: "48.999kw",
    developer: "LDEG",
    type: "Solar"
  },
  {
    id: 3,
    name: "Surajpur",
    lat: 23.212528,
    lng: 82.8667246,
    energy: "32kW",
    stored: "41.881kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 4,
    name: "Dibling",
    lat: 33.9625778,
    lng: 76.6457585,
    energy: "24kW",
    stored: "8.238kw",
    developer: "LREDA",
    type: "Solar"
  },
  {
    id: 5,
    name: "Lingshed",
    lat: 33.9038386,
    lng: 76.8246514,
    energy: "73.6kW",
    stored: "9.738kw",
    developer: "LREDA",
    type: "Solar"
  },
  {
    id: 6,
    name: "Nagari",
    lat: 13.31217355,
    lng: 79.59793429354428,
    energy: "5kw",
    stored: "14.447kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 7,
    name: "Yulchung",
    lat: 33.9269911,
    lng: 76.9105516,
    energy: "24kW",
    stored: "81.73kw",
    developer: "LREDA",
    type: "Solar"
  },
  {
    id: 8,
    name: "Dhanhar",
    lat: 26.874202,
    lng: 84.7895786,
    energy: "2kw",
    stored: "34.718kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 9,
    name: "Sumda do",
    lat: 34.104438,
    lng: 77.2136961,
    energy: "230kw",
    stored: "48.867kw",
    developer: "LREDA",
    type: "Micro Hydro"
  },
  {
    id: 10,
    name: "Chilling",
    lat: 34.0385204,
    lng: 77.2028513,
    energy: "20kw",
    stored: "1.834kw",
    developer: "LREDA",
    type: "Micro Hydro"
  },
  {
    id: 11,
    name: "Rawan",
    lat: 23.736394,
    lng: 77.72129183993908,
    energy: "4kw",
    stored: "59.185kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 12,
    name: "markha",
    lat: 33.8859985,
    lng: 77.4233499,
    energy: "27.2kw",
    stored: "81.93kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 13,
    name: "Kansara",
    lat: 21.7508249,
    lng: 72.1559857,
    energy: "4kw",
    stored: "52.922kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 14,
    name: "digar",
    lat: 34.294001,
    lng: 77.8064628,
    energy: "10kw",
    stored: "64.332kw",
    developer: "ldeg",
    type: "Micro Hydro"
  },
  {
    id: 15,
    name: "relay",
    lat: 13.2000969,
    lng: 77.7102741,
    energy: "12.8kw",
    stored: "71.514kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 16,
    name: "phobrang",
    lat: 34.057223,
    lng: 78.4419695,
    energy: "200kw",
    stored: "60.754kw",
    developer: "lreda",
    type: "Micro Hydro"
  },
  {
    id: 17,
    name: "lukung",
    lat: 33.9951164,
    lng: 78.4140257,
    energy: "13.4kw",
    stored: "4.091kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 18,
    name: "mann",
    lat: 31.2158299,
    lng: 74.7215659,
    energy: "17.2kw",
    stored: "85.05kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 19,
    name: "merak",
    lat: 33.8002441,
    lng: 78.5905698,
    energy: "46.4kw",
    stored: "94.676kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 20,
    name: "Kandanar",
    lat: 10.6127291,
    lng: 76.68886623492108,
    energy: "4kw",
    stored: "40.15kw",
    developer: "CREDA",
    type: "solar"
  },
  {
    id: 21,
    name: "parma",
    lat: 24.37334735,
    lng: 82.32388853056413,
    energy: "22.4kw",
    stored: "98.557kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 22,
    name: "chushul",
    lat: 33.6009053,
    lng: 78.6440678,
    energy: "131.2kw",
    stored: "53.532kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 23,
    name: "tsaga",
    lat: 33.3298562,
    lng: 78.8538311,
    energy: "38.8kw",
    stored: "61.715kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 24,
    name: "teri-phu",
    lat: 33.5639935,
    lng: 78.0369025,
    energy: "5kw",
    stored: "61.302kw",
    developer: "ldeg",
    type: "Micro Hydro"
  },
  {
    id: 25,
    name: "Shivrajpur",
    lat: 23.5858821,
    lng: 80.31583501118162,
    energy: "32kw",
    stored: "27.629kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 26,
    name: "Narendrapur",
    lat: 22.4541674,
    lng: 88.4183764,
    energy: "32kw",
    stored: "67.386kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 27,
    name: "Bagen",
    lat: 24.9653621,
    lng: 84.1515398,
    energy: "32kw",
    stored: "11.844kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 28,
    name: "Arrah",
    lat: 25.62345725,
    lng: 84.59683868653386,
    energy: "32kw",
    stored: "79.998kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 29,
    name: "nyoma",
    lat: 33.2054809,
    lng: 78.6496578,
    energy: "132kw",
    stored: "66.975kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 30,
    name: "muth",
    lat: 33.2015519,
    lng: 78
  },
  {
    energy: "80kw",
    stored: "83.746kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 31,
    name: "loma",
    lat: 33.1718009,
    lng: 78.8281773,
    energy: "16.64",
    stored: "54.11kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 32,
    name: "rongo",
    lat: 27.0385628,
    lng: 88.8358784,
    energy: "70.4kw",
    stored: "41.464kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 33,
    name: "Chumur",
    lat: 32.6693148,
    lng: 78.5954265,
    energy: "21.76kw",
    stored: "3.222kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 34,
    name: "koyul",
    lat: 32.8798789,
    lng: 79.1959427,
    energy: "96kw",
    stored: "56.033kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 35,
    name: "Patuk",
    lat: 28.0084129,
    lng: 93.4938419,
    energy: "10kw",
    stored: "35.431kw",
    developer: "APEDA",
    type: "Micro Hydro"
  },
  {
    id: 36,
    name: "Gomkang",
    lat: 27.56058,
    lng: 91.84708,
    energy: "25kw",
    stored: "65.384kw",
    developer: "APEDA",
    type: "Micro Hydro"
  },
  {
    id: 37,
    name: "Surve",
    lat: 14.6332302,
    lng: 74.3126607,
    energy: "3kw",
    stored: "85.242kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 38,
    name: "chumur",
    lat: 32.6693148,
    lng: 78.5954265,
    energy: "21.76kw",
    stored: "96.174kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 39,
    name: "surag",
    lat: 29.9865929,
    lng: 79.6620396,
    energy: "50kw",
    stored: "43.318kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 40,
    name: "Ghor",
    lat: 22.5089034,
    lng: 74.81792333299495,
    energy: "20kw",
    stored: "62.897kw",
    developer: "SREDA",
    type: "Micro Hydro"
  },
  {
    id: 41,
    name: "Baharbari",
    lat: 26.1204756,
    lng: 87.6533156,
    energy: "50kw",
    stored: "37.012kw",
    developer: "Desi Power",
    type: "Biomass"
  },
  {
    id: 42,
    name: "badiyakot",
    lat: 30.111725,
    lng: 79.844156,
    energy: "100kw",
    stored: "88.626kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 43,
    name: "teekh",
    lat: 30.0870206,
    lng: 79.8843483,
    energy: "100kw",
    stored: "57.986kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 44,
    name: "karmi",
    lat: 23.118644,
    lng: 74.3472505,
    energy: "50w",
    stored: "18.5kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 45,
    name: "Pokhara",
    lat: 24.296899,
    lng: 82.49696861630983,
    energy: "32kw",
    stored: "5.509kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 46,
    name: "jhuni",
    lat: 30.1113088,
    lng: 79.9896914,
    energy: "100kw",
    stored: "86.793kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 47,
    name: "Minapur",
    lat: 26.29119595,
    lng: 85.31315166431617,
    energy: "32kw",
    stored: "14.434kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 48,
    name: "namik",
    lat: 30.0988419,
    lng: 80.0898337,
    energy: "100kw",
    stored: "61.616kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 49,
    name: "gogina",
    lat: 30.0757784,
    lng: 80.0766901,
    energy: "100kw",
    stored: "11.794kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 50,
    name: "tomik",
    lat: 30.0690775,
    lng: 80.360085,
    energy: "500kw",
    stored: "97.92kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 51,
    name: "Kalyanpur",
    lat: 25.9797464,
    lng: 85.7963903829216,
    energy: "32kw",
    stored: "2.861kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 52,
    name: "Mudpar",
    lat: 21.7389034,
    lng: 82.6508801,
    energy: "4kw",
    stored: "39.499kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 53,
    name: "tarsali",
    lat: 30.5857792,
    lng: 79.0207188,
    energy: "100kw",
    stored: "15.059kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 54,
    name: "bura",
    lat: 24.738048149999997,
    lng: 80.96906725825289,
    energy: "200kw",
    stored: "95.056kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 55,
    name: "Hardi",
    lat: 24.092067800000002,
    lng: 81.9234057576312,
    energy: "5kw",
    stored: "43.55kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 56,
    name: "Chipari",
    lat: 20.5636085,
    lng: 80.3411293,
    energy: "3kw",
    stored: "83.828kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 57,
    name: "Kathali",
    lat: 23.727728550000002,
    lng: 81.0808062325224,
    energy: "3kw",
    stored: "65.428kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 58,
    name: "bara",
    lat: 25.19567335,
    lng: 81.6535430860293,
    energy: "0.72kw",
    stored: "45.951kw",
    developer: "Mere Gao Power",
    type: "solar"
  },
  {
    id: 59,
    name: "Putsil",
    lat: 18.7033414,
    lng: 82.991721,
    energy: "13kw",
    stored: "47.642kw",
    developer: "UREDA",
    type: "Micro Hydro"
  },
  {
    id: 60,
    name: "Rampura",
    lat: 25.9352897,
    lng: 78.23520369355703,


    energy: "32kw",
    stored: "8.547kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 61,
    name: "Kansa",
    lat: 25.2395471,
    lng: 78.56315306366556,
    energy: "32kw",
    stored: "59.746kw",
    developer: "Husk Power",
    type: "Biomass"
  },
  {
    id: 62,
    name: "bejin",
    lat: 32.895023,
    lng: 77.6428835,
    energy: "2kw",
    stored: "35.706kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 63,
    name: "harshil",
    lat: 30.7887715,
    lng: 78.7884105,
    energy: "150kw",
    stored: "25.727kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 64,
    name: "Revna",
    lat: 29.5593839,
    lng: 80.3804595,
    energy: "300kw",
    stored: "99.351kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 65,
    name: "hor",
    lat: 27.9104705,
    lng: 96.1868672,
    energy: "12kw",
    stored: "50.08kw",
    developer: "ureda",
    type: "Micro Hydro"
  },
  {
    id: 66,
    name: "hiptik",
    lat: 33.0526613,
    lng: 78.6470674,
    energy: "9kw",
    stored: "22.057kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 67,
    name: "manm",
    lat: 31.2158299,
    lng: 74.7215659,
    energy: "11.2kw",
    stored: "37.089kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 68,
    name: "Surkhang",
    lat: 33.3567689,
    lng: 77.129815,
    energy: "24kw",
    stored: "68.867kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 69,
    name: "Baro",
    lat: 27.5658797,
    lng: 80.6230966,
    energy: "16.4kw",
    stored: "98.283kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 70,
    name: "Samsai",
    lat: 10.6134662,
    lng: 76.68882158132852,
    energy: "4kw",
    stored: "13.907kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 71,
    name: "Naytala",
    lat: 29.7335487,
    lng: 80.0101883,
    energy: "40kw",
    stored: "21.213kw",
    developer: "lreda",
    type: "solar"
  },
  {
    id: 72,
    name: "Nagari",
    lat: 13.31217355,
    lng: 79.59793429354428,
    energy: "5kw",
    stored: "14.19kw",
    developer: "CREDA",
    type: "Solar"
  },
  {
    id: 73,
    name: "Arrah",
    lat: 25.62345725,
    lng: 84.59683868653386,
    energy: "32kw",
    stored: "63.59kw",
    developer: "Husk Power",
    type: "Biomass"
  }
];

export default function Dashboard() {
  const [energyPrice, setEnergyPrice] = useState(5.0); // Example initial price

  useEffect(() => {
    // Update energy price logic should be here if it's dynamic
  }, []);

  const sortedMicrogrids = microgrids.sort((a, b) => parseFloat(b.stored) - parseFloat(a.stored)).slice(0, 10);

  return (
    <main className="flex flex-col gap-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div>
        <EnergyPrice />
      </div>
      
      
      {/* Top 10 Microgrids List */}

      <div className="flex gap-5">  
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            Map of Microgrids and Macrogrids in India
          </h2>
          <div className="flex text-sm text-gray-400 pb-3">
            <p>This is realtime data from Google Maps*</p>
          </div>
          <Map />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-4xl">
        <h2 className="text-2xl font-bold">Top 10 Microgrids</h2>
        <div className="flex text-sm text-gray-400 mb-4">
            <p>In terms of stored energy (KWh)</p>
          </div>
        {sortedMicrogrids.map((microgrid) => (
          <MicrogridCard key={microgrid.id} microgrid={microgrid} energyPrice={energyPrice} />
        ))}
      </div>

      </div>
      

      {/* Plant List */}
      <PlantList />
      
      {/* Data Source */}
      <div className="flex text-sm text-gray-400">
        <p>
          All the data is according to latest Annual Report (2022-2023) by the
          Ministry of New and Renewable Energy and other publicly disclosed
          sources*
        </p>
      </div>
    </main>
  );
}



