// added a link and some section and styled the footer section

import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} team Cyberblock
        </p>
        <div className='flex'>
        <p className='text-gray-300 pr-10'>version 0.0(developmental build)</p>
          <a
            href="https://github.com/adarsh-jha-dev/h4b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400 transition duration-300 pr-5"
          >
            <FaGithub className="mr-2" />
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
