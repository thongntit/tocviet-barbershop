import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZY1UYlg5BArDDvHBX5R6tIMcnikbLkVE",
  authDomain: "barber-tocviet.firebaseapp.com",
  projectId: "barber-tocviet",
  storageBucket: "barber-tocviet.appspot.com",
  messagingSenderId: "439896035756",
  appId: "1:439896035756:web:a0726d0c7009c8f498aa09",
  measurementId: "G-52ZWC3LRYJ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const FirebaseApp = () => {
  const [link, setLink]=useState("")
  const getDatabase = async () => {
    const db = firebase.firestore();
    const result = await db.collection("customers").get();
    console.log(result.forEach(doc => console.log(doc.id, doc.data())));
    const gsReference = firebase.storage().refFromURL("gs://barber-tocviet.appspot.com/Screen Shot 2021-04-25 at 00.27.05.png")
    const downloadLink = await gsReference.getDownloadURL()
    setLink(downloadLink)
  };
  useEffect(() => {
    getDatabase();
  }, []);
  return <div>
    <img src={link} alt={"hehe"}/>
  </div>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirebaseApp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
