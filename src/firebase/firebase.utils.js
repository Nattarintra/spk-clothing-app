import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBEGhzJvIihTR8fezTDWf3obgnkhisapoY",
  authDomain: "spk-db.firebaseapp.com",
  projectId: "spk-db",
  storageBucket: "spk-db.appspot.com",
  messagingSenderId: "570850404434",
  appId: "1:570850404434:web:f5f634f98a8cba0cb8578b",
  measurementId: "G-CQYD8RMSNJ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
