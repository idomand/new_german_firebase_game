import React from "react";
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6yqLD0kQ8eAnT0WoVeWpI2VOXG2cbovQ",
  authDomain: "new-german-firebase-game-7b268.firebaseapp.com",
  projectId: "new-german-firebase-game-7b268",
  storageBucket: "new-german-firebase-game-7b268.appspot.com",
  messagingSenderId: "7181841876",
  appId: "1:7181841876:web:6957591f30b203d4dc5241",
};

initializeApp(firebaseConfig);
const db = getFirestore();

async function foo() {
  const colRef = collection(db, "books");

  getDocs(colRef).then((snapshot) => {
    console.log("snapshot.docs", snapshot.docs);

    snapshot.forEach((doc) => {
      console.log("doc.data() :>> ", doc.data());
    });
  });
}
foo();
export default function Home() {
  return (
    <>
      <p>this is the new app</p>
    </>
  );
}
