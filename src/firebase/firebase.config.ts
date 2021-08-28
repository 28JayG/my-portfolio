import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

/*config will go here */
const firebaseConfig = {
  apiKey: 'AIzaSyCErS6SQ508wPHBYpDjZHJ_QMDq1qMNG-0',
  authDomain: 'my-portfolio-df37e.firebaseapp.com',
  projectId: 'my-portfolio-df37e',
  storageBucket: 'my-portfolio-df37e.appspot.com',
  messagingSenderId: '951827241917',
  appId: '1:951827241917:web:4e2b176806e34a6a6b90d4',
  measurementId: 'G-VWYM7G3TBR',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
