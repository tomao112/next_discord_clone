import React, { useState } from 'react'
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '@/app/hooks';
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, serverTimestamp } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';
import useSubCollection from '@/app/hooks/useSubCollection';

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
  const { subDocuments: messages } = useSubCollection("channels", "messages");
  // console.log(channelName);
  // console.log(inputText);

  const sendMessage  =  async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // console.log("sendMessage");

    // channelコレクションの中にあるmessageコレクションの中にあるmessage情報を手に入れる
    const collectionRef: CollectionReference<DocumentData> = collection(db, "channels", String(channelId), "messages");

    const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
      message: inputText,
      timestamp: serverTimestamp(),
      user: user,
    });
    setInputText("");
    console.log(docRef);
  };

  return (
    <div className={styles.chat}>
      {/* chatheader */}
      <ChatHeader channelName={channelName} />
      {/* chatmessage */}
      <div className={styles.chatMessage}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.message} timestamp={message.timestamp} user={message.user}/>
        ))}
        {/* <ChatMessage />
        <ChatMessage /> */}
      </div>
      {/* chatinput */}
      <div className={styles.chatInput}>
      <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder='メッセージ送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} />
          <button type='submit' className={styles.chatInputButton} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>
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