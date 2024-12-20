import React from 'react'
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';

const Chat = () => {
  return (
    <div className={styles.chat}>
      {/* chatheader */}
      <ChatHeader />
      {/* chatmessage */}
      <div className={styles.chatMessage}></div>
      {/* chatinput */}
      <div className={styles.chatinput}></div>
    </div>
  )
}

export default Chat