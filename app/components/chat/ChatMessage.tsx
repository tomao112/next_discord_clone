import React from 'react'
import styles from './ChatMessage.module.scss';
import { Avatar } from '@mui/material';

const ChatMessage = () => {
  return (
    <div className={styles.message}>
      <Avatar />
      <div className={styles.messageInfo}>
        <h4>
          toma
          <span className={styles.messageTimeStamp}>2024/12/22</span>
        </h4>

        <p>本文</p>
      </div>
    </div>
  )
}

export default ChatMessage