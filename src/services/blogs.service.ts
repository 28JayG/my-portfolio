import { firestore } from '../firebase/firebase.config';

export const fetchBlogs = async () => {
  const blogsCollectionRef = firestore.collection('blogs');
  const blogsCollection = await blogsCollectionRef.get();

  return blogsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// export const setBlogsCollectionToFirestore = async () => {
//   const blogsCollectionRef = firestore.collection('blogs');

//   //create batch
//   const batch = firestore.batch();
//   try {
//     blogs.forEach((blog) => {
//       const docRef = blogsCollectionRef.doc();

//       batch.set(docRef, blog);
//     });

//     await batch.commit();
//     console.log('Done updating');
//   } catch (err) {
//     console.error(err);
//   }
// };
