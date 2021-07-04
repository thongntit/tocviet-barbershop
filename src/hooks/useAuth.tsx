import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "utils/appConfig";
import { AuthContext } from "contexts";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      console.log("da vao day");
      setIsAuthenticating(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuthenticating,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
