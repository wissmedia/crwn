import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBJJOI6XHx5ZzMqvah7KPNnVmpCDShEjf0",
  authDomain: "crwn-b11ac.firebaseapp.com",
  databaseURL: "https://crwn-b11ac.firebaseio.com",
  projectId: "crwn-b11ac",
  storageBucket: "crwn-b11ac.appspot.com",
  messagingSenderId: "112795599834",
  appId: "1:112795599834:web:65b8ede5df62884c11b6e3"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase