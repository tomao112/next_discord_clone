import React from 'react'
import Styles from './SidebarChannel.module.scss';
import { DocumentData } from 'firebase/firestore';

type Props = {
  id: string;
  channel: DocumentData;
}

const SidebarChannel = (props: Props) => {
  const { id, channel } = props;
  console.log(channel)
  return (
    <div className={Styles.sidebarChannel}>
      <h4>
        <span className={Styles.sidebarChannelHash}>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannel