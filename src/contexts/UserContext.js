import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

// Create AuthContext & Export
export const AuthContext = createContext();
// Create auth using getAuth
const auth = getAuth(app);

// Create UserContext: component name & it provides AuthContext
const UserContext = ({ children }) => {
    // Declare state for user
    const [user, setUser] = useState(null);

    // Declare createUser function to return a method
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // Declare useEffect to control the observer side effect
    useEffect( () =>{
        // Create Observer to observe user
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current User inside state change', currentUser);
            // Set user at the state
            setUser(currentUser);
        });
        // Call unSubscribe to detach the observer
        return () => unSubscribe();

    }, [])

    // Pass data to value
    const authInfo = { user, createUser, signIn, logOut }

    return (
        // Set provider & value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;