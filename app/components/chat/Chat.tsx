import React, { useEffect, useState } from 'react'
import styles from './Chat.module.scss';
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '@/app/hooks';
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '@/app/lib/firebase';

interface Messages {
  timestamp: Timestamp;
  message: string
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const channelName = useAppSelector((state) => state.channel.channelName);
  const channelId = useAppSelector((state) => state.channel.channelId);
  const user = useAppSelector((state) => state.user.user);
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
    })
    console.log(docRef);
  };

  useEffect(() => {
    let collectionRef = collection(db, "channels", String(channelId), "messages")
    onSnapshot(collectionRef, (snapshot) => {
      let results: any[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setMessages(results);
    })
  }, [channelId]);

  return (
    <div className={styles.chat}>
      {/* chatheader */}
      <ChatHeader channelName={channelName} />
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
          <input type="text" placeholder='メッセージ送信' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
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