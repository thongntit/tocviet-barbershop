import { createContext } from "react";
import firebase from "firebase";

interface AuthContextProps {
  user: firebase.User | null;
  isAuthenticating?: boolean;
  logout?: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps>({
  user: null,
});

export { AuthContext };
