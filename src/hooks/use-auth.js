import React, { useState, useEffect, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import {firebase} from './../db/index';
// import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import {useLocalStorage} from './useLocalStorage';


const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [localUser, setLocalUser] = useLocalStorage("user",null);
  const [user, setUser] = useState(localUser);
  const [error,setError] = useState('');
  const [loginError,setLoginError] = useState('')
  const [signUpError,setSignUpError] = useState('')

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.



 
  // const signin = (email, password,setShowError) => {
  //   return firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       setLocalUser(response.user)
  //       setUser(response.user);
  //       return response.user;
  //     })
  //     .catch(error =>{
  //       setShowError(true)
  //       setLoginError(error.message);
  //     });
  // };

  const signin = (email, password,setShowError,setShowSignInModal) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setLocalUser(response.user)
        setUser(response.user);
        setShowSignInModal(false)
        
        // setShowError(false)
        // setLoginError('')
        return response.user;
      })
      .catch(error =>{
        setShowError(true)
        setLoginError(error.message);
      });
  };


  const signup = (email,password,setShowSignUpModal,setShowCallToAction) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        
        setLocalUser(response.user)
        setUser(response.user)
        setShowSignUpModal(false)
        setShowCallToAction(true)
        return response.user;
        })
        .catch(error =>{
          setSignUpError(error.message);
          console.log(error.message);
        })
    };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setLocalUser(null)
        setUser(null);
        setLoginError('');
        setSignUpError('');
      })
      .catch(error =>{
        setError(error);
      });
  };
  
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    error,
    loginError,
    signUpError,
    signin,
    signup,
    signout,
  };
}
