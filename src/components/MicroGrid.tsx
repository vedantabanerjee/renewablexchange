import React, { useState } from 'react';

interface Microgrid {
  id: number;
  name: string;
  lat: number;
  lng: number;
  energy: string;
  stored: string;
  developer: string;
  type: string;
}

interface MicrogridCardProps {
  microgrid: Microgrid;
  energyPrice: number;
}

const MicrogridCard: React.FC<MicrogridCardProps> = ({ microgrid, energyPrice }) => {
  const [kwh, setKwh] = useState(0);
  
  const handleBuy = () => {
    const totalCost = kwh * energyPrice;
    // Implement the transaction logic here, for now we'll just log it
    console.log(`Buying ${kwh} kWh for a total of $${totalCost.toFixed(2)}`);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold mb-2">{microgrid.name}</h2>
        <p>Energy: {microgrid.energy}</p>
        <p>Stored: {microgrid.stored}</p>
        <p>Developer: {microgrid.developer}</p>
        <p>Type: {microgrid.type}</p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={kwh}
          onChange={(e) => setKwh(Number(e.target.value))}
          className="border rounded p-2 mr-2"
          placeholder="kWh"
        />
        <button onClick={handleBuy} className="bg-blue-500 text-white rounded p-2">
          Buy
        </button>
      </div>
    </div>
  );
};

export default MicrogridCard;
