import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import LoginScreen from "./containers/LoginScreen";
import { firebaseConfig } from "./utils/appConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF8F00",
    },
    secondary: {
      main: "#2B2B2B",
    },
  },
});

const FirebaseApp = () => {
  const [link, setLink] = useState("");
  const getDatabase = async () => {
    const db = firebase.firestore();
    const result = await db.collection("customers").get();
    console.log(result.forEach((doc) => console.log(doc.id, doc.data())));
    const gsReference = firebase
      .storage()
      .refFromURL(
        "gs://barber-tocviet.appspot.com/Screen Shot 2021-04-25 at 00.27.05.png"
      );
    const downloadLink = await gsReference.getDownloadURL();
    setLink(downloadLink);
  };
  useEffect(() => {
    getDatabase();
  }, []);
  return (
    <div>
      <img src={link} alt={"hehe"} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
