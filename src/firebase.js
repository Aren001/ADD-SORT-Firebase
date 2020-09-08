import firebase from 'firebase/app';

import 'firebase/firestore'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCJfT5EHUtYSGxJGBvbxGBljlKD14Psc3E",
    authDomain: "just-check-it-43936.firebaseapp.com",
    databaseURL: "https://just-check-it-43936.firebaseio.com",
    projectId: "just-check-it-43936",
    storageBucket: "just-check-it-43936.appspot.com",
    messagingSenderId: "707172891727",
    appId: "1:707172891727:web:3ec9e74a8441606a6c7e3a",
    measurementId: "G-2334MKLWKY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;