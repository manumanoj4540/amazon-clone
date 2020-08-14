import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEhwjikLHnkC_mM4srk6KCgubGazlu53g",
    authDomain: "app-61eee.firebaseapp.com",
    databaseURL: "https://app-61eee.firebaseio.com",
    projectId: "app-61eee",
    storageBucket: "app-61eee.appspot.com",
    messagingSenderId: "684921219354",
    appId: "1:684921219354:web:5f55e962ce0eb2e4aa64a3",
    measurementId: "G-GHENM0R9FH"
});

const auth = firebase.auth();

export {auth};