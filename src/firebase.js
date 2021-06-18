import firebase from "firebase"

const firebaseConfig ={
    apiKey: "AIzaSyDwuhUZNXW06yyeue3VR47hzvR4jEe7VqI",
    authDomain: "aaronvikta-disney-plus.firebaseapp.com",
    projectId: "aaronvikta-disney-plus",
    storageBucket: "aaronvikta-disney-plus.appspot.com",
    messagingSenderId: "771277705898",
    appId: "1:771277705898:web:75cc7f129ada0e297776d3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};

export default db