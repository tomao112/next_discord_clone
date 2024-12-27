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

  const user = useAppSelector((state) => state.user.user);
  console.log(user);
  // const user = null;

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(loginUser);
      if(authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
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
