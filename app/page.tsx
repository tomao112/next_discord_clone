import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

export default function Home() {
  return (
    <div className='homeContainer'>
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}
