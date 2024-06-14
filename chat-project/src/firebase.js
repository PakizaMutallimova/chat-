import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCf3gpw8ItToKGzRVWPDTm-4o3zGIomWQU",
  authDomain: "chat-data-9e447.firebaseapp.com",
  databaseURL: "https://chat-data-9e447-default-rtdb.firebaseio.com",
  projectId: "chat-data-9e447",
  storageBucket: "chat-data-9e447.appspot.com",
  messagingSenderId: "850236885081",
  appId: "1:850236885081:web:b3e25842e54128d0a40948"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
export { app, db }