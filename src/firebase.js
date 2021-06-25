import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB6POnzo-ekKjWLdWKHjYk_osu7A8R9JMo",
    authDomain: "chat-app-c50d0.firebaseapp.com",
    projectId: "chat-app-c50d0",
    storageBucket: "chat-app-c50d0.appspot.com",
    messagingSenderId: "5882784567",
    appId: "1:5882784567:web:158cc61a779788c268c8b2"
});
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db,auth,storage};