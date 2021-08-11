import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBuroTQCyAhIrf4n1BFegZLxOocj3BzXJs",
    authDomain: "clone-39be8.firebaseapp.com",
    projectId: "clone-39be8",
    storageBucket: "clone-39be8.appspot.com",
    messagingSenderId: "120751006445",
    appId: "1:120751006445:web:c0c4051d612b856441a2e4"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};