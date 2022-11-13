import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6yqLD0kQ8eAnT0WoVeWpI2VOXG2cbovQ",
  authDomain: "new-german-firebase-game-7b268.firebaseapp.com",
  projectId: "new-german-firebase-game-7b268",
  storageBucket: "new-german-firebase-game-7b268.appspot.com",
  messagingSenderId: "7181841876",
  appId: "1:7181841876:web:6957591f30b203d4dc5241",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

// !==========HELPER FUNCTIONS:=======

// !==========FIRESTORE FUNCTIONS:=======

export async function getAllData() {
  let dataArray = [];

  const querySnapshot = await getDocs(collection(db, "G-Words"));

  querySnapshot.forEach((doc) => {
    dataArray.push(doc.data());
  });

  console.log("dataArray", dataArray);
  return dataArray;
}
