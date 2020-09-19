import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB8Mbfto-KAk9c4lU4RryLLvEdNgmYT4oM',
  authDomain: 'react-slack-clone-752f4.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-752f4.firebaseio.com',
  projectId: 'react-slack-clone-752f4',
  storageBucket: 'react-slack-clone-752f4.appspot.com',
  messagingSenderId: '149101540370',
  appId: '1:149101540370:web:d21fd637814494f638d4cb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
