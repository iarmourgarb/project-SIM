//npm install react-use-cookie

import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./Delete";
import {Button} from "reactstrap";
import Read from "./Read";
import useCookie from "react-use-cookie";



// Landing page will be passed into App.js

export default function LogIn(props) {

//need to link this state to App.js
//pass thru props
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userIDToken, setUserIDToken] = useCookie('token', '0');
  const [userToken, setUserToken] = useCookie('user', '');


async function myReq(details) {
      try {
        const response = await axios.post("http://localhost:8000/api/auth/", details).then(props.setUserState("logged-in"));

        return response.data;
      } catch (err){console.log("oops")
      }
    };


const handleSubmit = async (evt) => {
    const details = {username: userUsername, password: userPassword};
    var response = await myReq(details);
      console.log(response);
      console.log("SETTING USER STATE ZTO LOGGED IN");
      try {
      setUserIDToken(response.token);
      setUserToken(response.user); }
      catch(err) {}

  };


  return <form onSubmit={handleSubmit} action='#'><label>
      Username:
      <input type="text" value={userUsername} onChange={e => setUserUsername(e.target.value)}/>
     </label>
     <label>
       Password:
       <input type="text" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
     </label><input type="submit" value="Submit"></input>
     </form>


}
