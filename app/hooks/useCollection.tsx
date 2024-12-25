import React, { useEffect, useState } from 'react';
import { onSnapshot, collection, DocumentData, query, CollectionReference, Query } from 'firebase/firestore';
import { db } from '../lib/firebase';


interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (QuerySnapshot) => {
      const channelsResults: Channels[] = [];
      QuerySnapshot.docs.forEach((doc) => 
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);
  return (
    { documents }
  )
}

export default useCollection