'use client';

import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect } from '../walletCollector';
import { FaWallet, FaEthereum, FaQrcode } from 'react-icons/fa';


const WalletConnectButton: React.FC = () => {
  const { activate, account, deactivate } = useWeb3React();
  const [wallet, setWallet] = useState<BeaconWallet | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const rpcUrl = "https://ghostnet.ecadinfra.com";
  const Tezos = new TezosToolkit(rpcUrl);

  const connectWallet = async () => {
    try {
      const newWallet = new BeaconWallet({
        name: "Simple NFT app tutorial",
        preferredNetwork: NetworkType.GHOSTNET,
      });
      await newWallet.requestPermissions();
      const address = await newWallet.getPKH();
      const balanceMutez = await Tezos.tz.getBalance(address);
      const balanceTez = (balanceMutez.toNumber() / 1000000).toFixed(2);
      setWallet(newWallet);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const sendmoney = async () => {
    Tezos.setWalletProvider(wallet as unknown as WalletProvider);
    await Tezos.wallet
      .transfer({
        amount: 10,
        to: "tz1befzYnetjgpUe2aVBdoVqVDvFim2iTkya",
      })
      .send()
      .then((op) => {
        console.log(`Waiting for ${op.opHash} to be confirmed...`);
        return op.confirmation(2).then(() => op.opHash);
      })
      .catch((error) =>
        console.log(`Error: ${JSON.stringify(error, null, 2)}`)
      );
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
                onClick={() => connectWallet()}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaEthereum className="mr-2" /> Connect MetaMask
              </button>
              <button
                onClick={() => sendmoney()}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaQrcode className="mr-2" /> Send Tezos to address
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
