import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCMdh-x3PVAM47M3bSPfi2Zb9EXeEVH0fc',
  authDomain: 'instagram-clone-72773.firebaseapp.com',
  databaseURL: 'https://instagram-clone-72773.firebaseio.com',
  projectId: 'instagram-clone-72773',
  storageBucket: 'instagram-clone-72773.appspot.com',
  messagingSenderId: '951233835607',
  appId: '1:951233835607:web:e2c3bec48a9f40ccc62912',
  measurementId: 'G-0VGLWJKEMB',
});
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
