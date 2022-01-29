import React,{useContext} from "react";
import AuthContex from "../AuthContex";
const Auth=props=>{

    const auths=useContext(AuthContex);
    return(
        <button onClick={auths.login}>Log in</button>
        //auth.login it runs when we clicked
        //auth.login() it runs when the component render first time as well as onclick
    )
};

export default Auth;