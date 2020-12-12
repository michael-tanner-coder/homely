import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9NuGAt1xvBxMhnj8HJe_3eiZRdv5BXLw",
  authDomain: "homely-92588.firebaseapp.com",
  databaseURL: "https://homely-92588.firebaseio.com",
  projectId: "homely-92588",
  storageBucket: "homely-92588.appspot.com",
  messagingSenderId: "668181735388",
  appId: "1:668181735388:web:6571db816716b6c50c1119",
  measurementId: "G-VNQTQQMV70",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, auth };
