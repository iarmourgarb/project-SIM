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
  const [userToken, setUserToken] = useCookie('username', '');

  // (async () => {
  //   // POST request using axios with async/await
  //   const element = document.querySelector('#post-request-async-await .article-id');
  //   const article = { title: 'Axios POST Request Example' };
  //   const response = await axios.post('https://reqres.in/api/articles', article);
  //   element.innerHTML = response.data.token;
// })()

async function myReq(details) {
      // Pass the URL to the fetch API.
      // setUserToken("3");
      try {
        const response = await axios.post("http://localhost:8000/api/auth/", details).then(props.setUserState("logged-in"))

        return response.data;
      } catch (err){
      }
    };


const handleSubmit = async (evt) => {
    const details = {username: userUsername, password: userPassword};
    var response = await myReq(details);
      console.log(response);
      console.log("SETTING USER STATE ZTO LOGGED IN");
      setUserIDToken(response.token);
      props.setUserToken(response.user);
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
