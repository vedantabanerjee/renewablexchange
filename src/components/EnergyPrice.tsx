import React, { useEffect, useState } from "react";

const energyPrices = [
  10000.0, 10000.0, 10000.0, 10000.0, 6000.6, 5978.0, 5002.09, 4520.39, 3920.11,
  3920.08, 3681.48, 3580.36, 3540.74, 3540.08, 3369.98, 3369.86, 3369.97,
  3410.47, 3410.18, 3378.93, 3378.8, 3540.09, 3681.33, 3602.59, 3628.93,
  3602.76, 3580.85, 3540.89, 3359.93, 3290.96, 3248.23, 3062.67, 2973.31,
  2920.49, 2477.51, 1999.7, 2129.52, 2040.51, 1799.95, 1799.61, 1328.05,
  1199.91, 1199.98, 1199.5, 1199.07, 999.92, 999.08, 999.51, 999.59, 999.27,
  999.09, 996.84, 996.51, 996.72, 996.88, 996.99, 999.8, 1327.35, 1340.56,
  1499.34, 1499.55, 1500.0, 1799.34, 1999.28, 2037.36, 2019.97, 2138.19,
  2059.86, 2499.16, 2128.81, 2076.16, 2080.77, 2199.81, 2199.75, 3160.23,
  3160.96, 3602.93, 3967.23, 4119.5, 4499.42, 6000.32, 6000.37, 6240.99, 6983.5,
  9130.16, 9130.72, 10000.0, 9130.72, 9130.16, 6983.5, 6240.99, 6000.37,
  6000.32, 4499.42, 4119.5, 3967.23, 3602.93, 3160.96, 3160.23, 2199.75,
  2199.81, 2080.77, 2076.16, 2128.81, 2499.16, 2059.86, 2138.19, 2019.97,
  2037.36, 1999.28, 1799.34, 1500.0, 1499.55, 1499.34, 1340.56, 1327.35, 999.8,
  996.99, 996.88, 996.72, 996.51, 996.84, 999.09, 999.27, 999.59, 999.51,
  999.08, 999.92, 1199.07, 1199.5, 1199.98, 1199.91, 1328.05, 1799.61, 1799.95,
  2040.51, 2129.52, 1999.7, 2477.51, 2920.49, 2973.31, 3062.67, 3248.23,
  3290.96, 3359.93, 3540.89, 3580.85, 3602.76, 3628.93, 3602.59, 3681.33,
  3540.09, 3378.8, 3378.93, 3410.18, 3410.47, 3369.97, 3369.86, 3369.98,
  3540.08, 3540.74, 3580.36, 3681.48, 3920.08, 3920.11, 4520.39, 5002.09,
  5978.0, 6000.6, 10000.0, 10000.0, 10000.0, 10000.0, 10000.0, 10000.0, 10000.0,
  10000.0, 6000.6, 5978.0, 5002.09, 4520.39, 3920.11, 3920.08, 3681.48, 3580.36,
  3540.74, 3540.08, 3369.98, 3369.86, 3369.97, 3410.47, 3410.18, 3378.93,
  3378.8, 3540.09, 3681.33, 3602.59, 3628.93, 3602.76, 3580.85, 3540.89,
  3359.93, 3290.96, 3248.23, 3062.67, 2973.31, 2920.49, 2477.51, 1999.7,
  2129.52, 2040.51, 1799.95, 1799.61, 1328.05, 1199.91, 1199.98, 1199.5,
  1199.07, 999.92, 999.08, 999.51, 999.59, 999.27, 999.09, 996.84, 996.51,
  996.72, 996.88, 996.99, 999.8, 1327.35, 1340.56, 1499.34, 1499.55, 1500.0,
  1799.34, 1999.28, 2037.36, 2019.97, 2138.19, 2059.86, 2499.16, 2128.81,
  2076.16, 2080.77, 2199.81, 2199.75, 3160.23, 3160.96, 3602.93, 3967.23,
  4119.5, 4499.42, 6000.32, 6000.37, 6240.99, 6983.5, 9130.16, 9130.72, 10000.0, 10000.0,
  9130.72, 9130.16, 6983.5, 6240.99, 6000.37, 6000.32, 4499.42, 4119.5, 3967.23,
  3602.93, 3160.96, 3160.23, 2199.75, 2199.81, 2080.77, 2076.16, 2128.81,
  2499.16, 2059.86, 2138.19, 2019.97, 2037.36, 1999.28, 1799.34, 1500.0,
  1499.55, 1499.34, 1340.56, 1327.35, 999.8, 996.99, 996.88, 996.72, 996.51,
  996.84, 999.09, 999.27, 999.59, 999.51, 999.08, 999.92, 1199.07, 1199.5,
  1199.98, 1199.91, 1328,]; // Example prices array

const EnergyPrice: React.FC = () => {
  const [index, setIndex] = useState(0);
  const price = energyPrices[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % energyPrices.length);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-3/6 bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className=" text-3xl font-bold">Energy Price</h2>
        <div className="flex justify-center  text-sm text-gray-400 mt-2">
            <p>This is realtime data from Google Maps*</p>
          </div>
        <p className="text-4xl font-bold text-green-500">₹{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default EnergyPrice;
