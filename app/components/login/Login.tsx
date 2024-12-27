import React from 'react';
import styles from './Login.module.scss';
import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/app/lib/firebase';
import Image from 'next/image';

const Login = () => {

  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message)
    })
  }
  return (
    <div className={styles.login}>
      <div className={styles.loginLogo}>
        <Image src="./blue_hamham_icon.jpg" alt="ログイン" width={500} height={300} />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login