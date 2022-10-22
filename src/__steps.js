/*
Auth Setup:
-----------------------
1.Create firebase project
2. Enable web
3. Enable sign in method
4. Install firebase
5. Get firebase config in your firebase.config.js file
6. Export app from firebase.config.js

Auth Integration:
-----------------------
1. Create UserContext (AuthContext): UserContext --> component name, UserContext provides AuthContext
2. Create AuthContext
3. Set AuthContext.Provider
4. Set the children using destructuring & use dynamically
5. Set value into the provider
6. Create a variable to pass data at value
7. Set <App/> into the UserContext in the "index.js" file
*/