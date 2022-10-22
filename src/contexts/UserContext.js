import React, { createContext } from 'react';

// Create AuthContext & Export
export const AuthContext = createContext();

// Create UserContext: component name & it provides AuthContext
const UserContext = ({children}) => {

    // Pass data to value
    const authInfo = {}

    return (
        // Set provider & value
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;