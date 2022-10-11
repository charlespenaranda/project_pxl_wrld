import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


function welcome () {

    const history = new useHistory();


    const [username, setusername] = new useState("");
    const [password, setpassword] = new useState("");

    const [userlist, setUserList] = new useState([]);

    const adduser = () => {
        Axios.post("http://localhost:3001/create", {
            username: username,
            password: password,

        }).then(() => {
            setUserList([
            ...userlist,
            {
                username: username,
                password: password,

            },
          ]);
        });

        history.push("/character");

      };
    

return(
<div className="char-main">
    <div className="char-info">
        <h1>WELCOME PXL WRLD </h1>
        <label className="label-text">Username:</label>
        <div className="label-text"><input type="text" 
                onChange={(event) => {
                setusername(event.target.value);
          }}/></div>
        <label className="label-text">Password:</label>
        <div className="label-text"><input 
                 onChange={(event) => {
                    setpassword(event.target.value);
                  }} type="text"/></div>
        <div className="label-text"><button onClick={adduser}type="button" id="btnLink" name="btnLink">Register</button></div>
        <div className="label-text"><button onClick={adduser}type="button" id="btnLink" name="btnLink">Enter</button></div>
        
    </div>
    </div>
)
}

export default welcome