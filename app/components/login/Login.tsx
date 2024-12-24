import React from 'react';
import styles from './Login.module.scss';
import {Button} from '@mui/material';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginLogo}>
        <img src="./blue_hamham_icon.jpg" alt="" />
      </div>

      <Button>ログイン</Button>
    </div>
  )
}

export default Login