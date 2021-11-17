import {createContext} from "react";

export const AuthContext = createContext({
    islogged:false,
    wishList:0,
    userId:null
});