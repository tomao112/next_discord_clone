import React from 'react'
import styles from './ChatMessage.module.scss';
import { Avatar } from '@mui/material';
import { Timestamp } from 'firebase/firestore';

type Props = {
  timestamp: Timestamp;
  message: string
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}
const ChatMessage = (props: Props) => {
  const { message, timestamp, user} = props
  return (
    <div className={styles.message}>
      <Avatar src={user?.photo}/>
      <div className={styles.messageInfo}>
        <h4>
          {user?.displayName}
          <span className={styles.messageTimeStamp}>{new Date(timestamp?.toDate()).toLocaleString()}</span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage