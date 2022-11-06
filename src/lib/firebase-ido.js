import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6yqLD0kQ8eAnT0WoVeWpI2VOXG2cbovQ",
  authDomain: "new-german-firebase-game-7b268.firebaseapp.com",
  projectId: "new-german-firebase-game-7b268",
  storageBucket: "new-german-firebase-game-7b268.appspot.com",
  messagingSenderId: "7181841876",
  appId: "1:7181841876:web:6957591f30b203d4dc5241",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }
