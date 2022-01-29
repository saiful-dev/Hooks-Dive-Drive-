import React,{useContext} from "react";
import AuthContex from "../AuthContex";

const Header =props=>{
    
    const auths=useContext(AuthContex);
    return(

    <header>
        {auths.status? <button onClick={props.onLoadTodos}>Todo List</button>:null}
        {" "}
        <button onClick={props.onLoadAuth}>Auth</button>
    </header>

    )

};

export default Header;
