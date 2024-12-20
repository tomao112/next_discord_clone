import React from 'react'
import styles from './ChatHeader.module.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className={styles.chatHeader}>
      <div className={styles.chatHeaderLeft}>
        <h3>
          <span className={styles.chatHeaderHash}>#</span>
          next.js app
        </h3>
      </div>

      <div className={styles.chatHeaderRight}>
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleIcon />
        <div className={styles.chatHeaderSearch}>
          <input type="text" placeholder='検索' />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  )
}

export default ChatHeader