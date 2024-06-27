// Hard coded sentences to be displayed as cards in the Hero section of the landing page

import React from "react";

const HeroCard = () => {
  return (
    <section className="flex flex-col items-center h-screen bg-cover bg-center space-y-10">
      
      <section className="flex space-x-10">
        <div className="max-w-xl p-3 bg-black bg-opacity-30 rounded-lg text-green-400 text-center">
          <p className="text-lg md:text-xl">
            Why Us?
          </p>
        </div>
      </section>
      
      <section className="flex space-x-10">
        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            India aims to achieve 500 GW of renewable energy by 2030. Our
            platform connects you to local green energy sources, supporting
            national goals.
          </p>
        </div>

        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            Decentralized energy grids reduce transmission losses. Trade energy
            directly from micro-grids, maximizing efficiency.
          </p>
        </div>
      </section>

      <section className="flex space-x-10">
        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            Transparent energy markets are essential for sustainable growth.
            Real-time data on energy production and availability fosters
            informed trading decisions.
          </p>
        </div>

        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
            Secure transactions in energy trading. <span className="text-purple-600"> Cryptocurrency</span> integration
            ensures fast, secure, and transparent transactions.
          </p>
        </div>
      </section>

      <section className="flex space-x-10">
        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
          In India's growing energy landscape, there's a pressing need for reliable green energy sources; 
          <span className="text-green-400"> Renewablexchange</span> bridges this gap by providing 
          real-time data and trading capabilities for sustainable energy.
          </p>
        </div>

        <div className="max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
          <p className="text-lg md:text-xl">
          Addressing the need for decentralized energy solutions, our application facilitates easy access to renewable energy, 
          fostering a greener economy and encouraging community participation.
          </p>
        </div>
      </section>

      <div className="w-full max-w-6xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <p className="text-lg md:text-xl">
        <span className="text-green-400">Renewablexchange</span> not only tracks and showcases green energy production but also provides a secure, 
        blockchain-based marketplace for energy transactions, aligning with global sustainability goals!
        </p>
      </div>

    </section>
  );
};

export default HeroCard;
