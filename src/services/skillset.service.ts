import { firestore } from '../firebase/firebase.config';

export const fetchSkillSetCollection = async () => {
  //get collections ref
  const skillSetCollectionRef = firestore.collection('skillsets');
  // get collections from collectionref
  const skillSetCollection = await skillSetCollectionRef.get();
  //return doc data
  return skillSetCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
