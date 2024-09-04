"use client"
import Chat from "../components/Chat";
import { useAccount } from 'wagmi';



const Home = () => {
  const { address: walletAddress } = useAccount();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">XMTP Chat App</h1>
      {walletAddress ? (
        <Chat />
      )
        : (
          <w3m-button />
        )}

    </div>
  );
}

export default Home;
