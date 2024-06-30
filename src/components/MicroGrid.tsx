import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-types";
import { WalletProvider } from "@taquito/taquito";
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

const rpcUrl = "https://ghostnet.ecadinfra.com";
const Tezos = new TezosToolkit(rpcUrl);

const MicrogridCard: React.FC<MicrogridCardProps> = ({
  microgrid,
  energyPrice,
}) => {
  const [kwh, setKwh] = useState(0);

  const handleBuy = async (Amount: any) => {
    const wallet = new BeaconWallet({
      name: "Simple NFT app tutorial",
      preferredNetwork: NetworkType.GHOSTNET,
    });
    await wallet.requestPermissions();
    Tezos.setWalletProvider(wallet as unknown as WalletProvider);
    const tezAmount = 10;
    await Tezos.wallet
      .transfer({
        amount: tezAmount,
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

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold mb-2">{microgrid.name}</h2>
        <p>Energy: {microgrid.energy}</p>
        <p>Stored: {microgrid.stored}</p>
        <p>Developer: {microgrid.developer}</p>
        <p>Type: {microgrid.type}</p>
        <p>Price per kWh: {energyPrice} Tez</p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={kwh}
          onChange={(e) => setKwh(Number(e.target.value))}
          className="border rounded p-2 mr-2"
          placeholder="kWh"
        />
        <button
          onClick={() => handleBuy(kwh)}
          className="bg-blue-500 text-white rounded p-2"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MicrogridCard;
