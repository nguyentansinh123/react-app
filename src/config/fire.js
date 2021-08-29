import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAZPMGpQkKd6n1MB1GA68jkiQTsC0x_fyk",
    authDomain: "react-app-c4dff.firebaseapp.com",
    projectId: "react-app-c4dff",
    storageBucket: "react-app-c4dff.appspot.com",
    messagingSenderId: "59583292825",
    appId: "1:59583292825:web:00795aad60b076924e5f08"
  };
  const fire = firebase.initializeApp(firebaseConfig)

  export default fire