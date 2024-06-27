//fucntional component named HeroSection used as a landing page
//added bg image with opacity and an app description
// added an animated segment to show the net total renewable energy produced by India in 2024

"use client";
import React from "react";
import CountUp from "react-countup";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center space-y-10">
      <div className=" mt-10 max-w-xl p-8 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-4">
          <span className="text-white">Welcome to </span>
          <span className="text-green-400">Renewablexchange</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover and trade green energy from micro-grids and macro-grids
          across India. Support sustainable energy and secure transactions with
          <span className="text-purple-600"> cryptocurrency.</span>
        </p>
      </div>

      <div className="max-w-xl p-3 bg-black bg-opacity-80 rounded-sm text-white text-center">
        <p className="text-lg md:text-xl">
          India's current renewable energy capacity:
          <span className="text-green-400 ml-2">
            <b>
              <CountUp end={193.57} duration={3} decimals={1} suffix=" GW" />
            </b>
          </span>
        </p>
      </div>

      <div className="w-full max-w-5xl p-5 bg-black bg-opacity-60 rounded-lg text-white text-center">
        <p className="text-lg md:text-xl">
          <span className="text-green-400">Renewablexchange</span> enables users
          to discover and trade green energy from micro-grids and macro-grids
          across India, promoting sustainable energy usage and secure
          cryptocurrency transactions, addressing the critical need for
          accessible renewable energy and reducing carbon footprints.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
