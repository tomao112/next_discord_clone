'use client';

import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
// import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { login, logout } from "./features/userSlice";
import { unsubscribe } from "diagnostics_channel";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from './utils/ErrorFallBack';

export default function Home() {

  const user = useAppSelector((state) => state.user);
  // console.log(user);
  // const user = null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if(loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    // return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className='homeContainer'>
      {user ? (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Sidebar />
          </ErrorBoundary>
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
