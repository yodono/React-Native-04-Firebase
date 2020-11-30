import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDECLAq9e2QRsXTcmUv4GHvwABjCFvMZ2g",
    authDomain: "colecionaveisfb-e91a6.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-e91a6.firebaseio.com",
    projectId: "colecionaveisfb-e91a6",
    storageBucket: "colecionaveisfb-e91a6.appspot.com",
    messagingSenderId: "1065385169224",
    appId: "1:1065385169224:web:bd4268e015c4cf7f35a37d",
    measurementId: "G-1H603YHV6Q"
  };
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

  export const conexaoFS = app.firestore();