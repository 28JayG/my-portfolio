import { firestore } from '../firebase/firebase.config';

export const fetchProjects = async () => {
  const projectsCollectionRef = firestore.collection('projects');
  const projectsCollection = await projectsCollectionRef.get();

  return projectsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// export const setProjectsCollectionToFirestore = async () => {
//   const projectsCollectionRef = firestore.collection('projects');

//   //create batch
//   const batch = firestore.batch();
//   try {
//     projects.forEach((blog) => {
//       const docRef = projectsCollectionRef.doc();

//       batch.set(docRef, blog);
//     });

//     await batch.commit();
//     console.log('Done updating');
//   } catch (err) {
//     console.error(err);
//   }
// };
