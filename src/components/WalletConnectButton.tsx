'use client';
import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect } from '../walletCollector';
import { FaWallet, FaEthereum, FaQrcode } from 'react-icons/fa';

const WalletConnectButton: React.FC = () => {
  const { activate, account, deactivate } = useWeb3React();
  const [showDropdown, setShowDropdown] = useState(false);

  const connectWallet = async (connector) => {
    try {
      await activate(connector);
      setShowDropdown(false); // Close dropdown on successful connection
    } catch (ex) {
      console.error(ex);
    }
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none"
        title="Wallet"
      >
        <FaWallet className="w-4 h-5" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          {account ? (
            <div className="px-4 py-2">
              <p className="text-gray-700">Connected: {account}</p>
              <button
                onClick={() => deactivate()}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => connectWallet(injected)}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaEthereum className="mr-2" /> Connect MetaMask
              </button>
              <button
                onClick={() => connectWallet(walletconnect)}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaQrcode className="mr-2" /> Connect WalletConnect
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
