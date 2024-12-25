'use client';
import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannel from './SidebarChannel';
import { auth, db } from '@/app/lib/firebase';
import { useAppSelector } from '@/app/hooks';
import useCollection from '@/app/hooks/useCollection';

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);
  const { documents: channels} = useCollection("channels");

  return (
    <div className={styles.sidebar}>
      {/* sidebarLeft */}
      <div className={styles.sidebarLeft}>
        <div className={styles.serverIcon}>
          <img src="./blue_hamham_icon.jpg" alt="" />
        </div>
        <div className={styles.serverIcon}>
          <img src="./blue_hamham_icon.jpg" alt="" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className={styles.sidebarRight}>
        <div className={styles.sidebarTop}>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannels */}
        <div className={styles.sidebarChannels}>
          <div className={styles.sidebarChannelsHeader}>
            <div className={styles.sidebarHeader}>
              <ExpandMoreIcon />
              <h4>プログラミング</h4>
            </div>
            <AddIcon className={styles.sidebarAddIcon}/>
          </div>

          <div className={styles.sidebarChannelList}>
            {channels.map((channel) => (
              <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
            ))}
          </div>

          <div className={styles.sidebarFooter}>
            <div className={styles.sidebarAccount}>
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className={styles.accountName}>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>
            <div className={styles.sidebarVoice}>
                <MicIcon />
                <HeadphonesIcon />
                <SettingsIcon />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar