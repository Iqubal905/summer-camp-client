import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

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


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('Login-User', currentUser);



            if(currentUser){
              axios.post('http://localhost:5000/jwt', {email: currentUser.email})
              .then(data => {
                  // console.log(data.data.token);
                  localStorage.setItem('access-token', data.data.token)
                  console.log(data);
                  setLoading(false)
              })
             }
             else{
              localStorage.removeItem('access-token')
             }

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
        logOut,
        updateUserProfile
    
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