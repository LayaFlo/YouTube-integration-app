// web app's Firebase configuration
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAItJqNgd0Tjm8baAQU0H-c1RALfrDZV1I",
  authDomain: "authapp-d8341.firebaseapp.com",
  databaseURL: "https://authapp-d8341.firebaseio.com",
  projectId: "authapp-d8341",
  storageBucket: "authapp-d8341.appspot.com",
  messagingSenderId: "778197257761",
  appId: "1:778197257761:web:834eec817910c80c959d60",
  measurementId: "G-2RX4G7EYWW",
};

// Initialize Firebase
const ApiKeys = firebase.initializeApp(firebaseConfig);

export default ApiKeys;
