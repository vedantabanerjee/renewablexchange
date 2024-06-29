import React, { useEffect, useState } from 'react';

const energyPrices = [5.0, 5.2, 5.3, 5.1, 5.4, 5.5]; // Example prices array

const EnergyPrice: React.FC = () => {
  const [price, setPrice] = useState(energyPrices[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prevPrice) => {
        const currentIndex = energyPrices.indexOf(prevPrice);
        const nextIndex = (currentIndex + 1) % energyPrices.length;
        return energyPrices[nextIndex];
      });
    }, 1000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className='flex justify-center'>
      <div className="flex justify-between w-4/6 bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Real-time Energy Price</h2>
      <p className="text-4xl font-bold text-green-500">${price.toFixed(2)}</p>
    </div>
    </div>
  );
};

export default EnergyPrice;
