import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/functions';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDmpzXgOZp-cYADvrCIC-OONTm9ODH053o",
    authDomain: "greentips-c682f.firebaseapp.com",
    databaseURL: "https://greentips-c682f.firebaseio.com",
    projectId: "greentips-c682f",
    storageBucket: "greentips-c682f.appspot.com",
    messagingSenderId: "65431650939",
    appId: "1:65431650939:web:5d2150410730b32a8718de"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;