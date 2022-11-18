import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";

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

async function checkIfWordExists(wordG) {
  const querySnapshot = await getDocs(collection(db, "G-Words"));
  const oldArray = [];
  querySnapshot.forEach((doc) => {
    oldArray.push(doc.data());
  });
  const regexString = `^${wordG}$`;
  const nameRegex = new RegExp(regexString, "i");
  const isNewWordUnique = oldArray.find((element) => {
    return nameRegex.test(element.wordG);
  });

  if (isNewWordUnique) {
    return false;
  } else {
    return true;
  }
}

// !==========FIRESTORE FUNCTIONS:=======

export async function getAllData() {
  let dataArray = [];

  const querySnapshot = await getDocs(collection(db, "G-Words"));

  querySnapshot.forEach((doc) => {
    dataArray.push(doc.data());
  });

  return dataArray;
}

export async function addNewWord(wordE, Artikel, wordG, plural) {
  const isNewWordUnique = await checkIfWordExists(wordG);
  console.log("isNewWordUnique :>> ", isNewWordUnique);
  const newWord = { wordE, Artikel, wordG, plural };

  if (isNewWordUnique) {
    await addDoc(collection(db, "G-Words"), {
      ...newWord,
    });
    return "good";
  } else {
    return "bad";
  }
}
