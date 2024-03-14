import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Donald Duck"
});


export default UserContext;