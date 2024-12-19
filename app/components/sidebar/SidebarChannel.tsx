import React from 'react'
import Styles from './SidebarChannel.module.scss';

const SidebarChannel = () => {
  return (
    <div className={Styles.sidebarChannel}>
      <h4>
        <span className={Styles.sidebarChannelHash}>#</span>
        next.js
      </h4>
    </div>
  )
}

export default SidebarChannel