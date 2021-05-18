import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyClcYYUn04_6H_jZeDjCXmFgV2XvEmAPek',
  authDomain: 'facebook-d55ff.firebaseapp.com',
  projectId: 'facebook-d55ff',
  storageBucket: 'facebook-d55ff.appspot.com',
  messagingSenderId: '677529255197',
  appId: '1:677529255197:web:ea17048686457987b8f5f4',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
