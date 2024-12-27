import { useEffect, useState } from 'react';
import { onSnapshot, collection, DocumentData, query, CollectionReference, Query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAppSelector } from '../hooks';

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

const useSubCollection = (collectionName: string, SubCollectionName: string) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);


  useEffect(() => {
    let collectionRef = collection(db, collectionName, String(channelId), SubCollectionName);

    const collectionRefOrderBy = query(collectionRef, orderBy("timestamp", "asc"));

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        })
      })
      setSubDocuments(results);
      console.log(results);
    })
  }, [channelId]);
  return { subDocuments }
}

export default useSubCollection