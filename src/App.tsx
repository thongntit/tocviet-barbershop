import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import LoginScreen from "./containers/LoginScreen";
import { firebaseConfig } from "./utils/appConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// const FirebaseApp = () => {
//   const [link, setLink] = useState("");
//   const getDatabase = async () => {
//     const db = firebase.firestore();
//     const result = await db.collection("customers").get();
//     console.log(result.forEach((doc) => console.log(doc.id, doc.data())));
//     const gsReference = firebase
//       .storage()
//       .refFromURL(
//         "gs://barber-tocviet.appspot.com/Screen Shot 2021-04-25 at 00.27.05.png"
//       );
//     const downloadLink = await gsReference.getDownloadURL();
//     setLink(downloadLink);
//   };
//   useEffect(() => {
//     getDatabase();
//   }, []);
//   return (
//     <div>
//       <img src={link} alt={"hehe"} />
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginScreen />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
