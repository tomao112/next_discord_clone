'use client';

import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
// import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import { useAppSelector } from "./hooks";

export default function Home() {

  const user = useAppSelector((state) => state.user);
  console.log(user);
  // const user = null;
  return (
    <div className='homeContainer'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}
