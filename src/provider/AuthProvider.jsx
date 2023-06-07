import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()


    const provider  = new GoogleAuthProvider

    const logInWithGoogle = () =>{
      return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      }


      const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('Login-User', currentUser);
        });
        return () =>{
            return unsubscribe()
        }

      }, [])

      const authData = {
        user,
        createUser,
        logInWithGoogle,
        loading,
        signIn,
        logOut
    
  }

    return (
        <div>
           <AuthContext.Provider value={authData}>
                {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;