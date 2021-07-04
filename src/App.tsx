import { createMuiTheme } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";
import PrivateRoute from "components/PrivateRoute";
import Customer from "containers/Customer";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import LoginScreen from "./containers/LoginScreen";

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
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute>
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/staff" component={Home} />
            <Route exact path="/account" component={Home} />
            <Redirect to="/customer" />
          </PrivateRoute>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
