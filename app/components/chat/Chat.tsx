import React from 'react'
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';

const Chat = () => {
  return (
    <div className={styles.chat}>
      {/* chatheader */}
      <ChatHeader />
      {/* chatmessage */}
      <div className={styles.chatMessage}>
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatinput */}
      <div className={styles.chatInput}>
      <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder='メッセージ送信' />
          <button type='submit' className={styles.chatInputButton}>
            送信
          </button>
        </form>

        <div className={styles.chatInputIcons}>
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat