import React from 'react';
import styles from './Login.module.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/lib/firebase';

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message)
    })
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginLogo}>
        <img src="./blue_hamham_icon.jpg" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login