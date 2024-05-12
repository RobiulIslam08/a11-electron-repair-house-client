/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import { auth } from "../../firebase/firebase.config";
// import { auth } from "../firebase/firebase.config";

const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext('')

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [reload])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password,) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const signWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }




    const authInfo = {
        signWithGithub,
        signWithGoogle,
        user,
        createUser,
        loginUser,
        logout,
        loading,
        updateUserProfile,
        setReload
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;