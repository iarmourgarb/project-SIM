import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./Delete";
import {Button} from "reactstrap";
import Read from "./Read";
import useCookie from "react-use-cookie";


export default function AddUser(props) {

  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

const handleSubmit = (formData) => {
  // make axios request to mybackend.com/newSong, with context of username=songUsername
  console.log("submitted new user")

  axios.post('http://localhost:8000/api/users/', {
    username: userUsername,
    password: userPassword,
    is_active: true,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });};

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={userUsername} onChange={e => setUserUsername(e.target.value)}/>
      </label>
      <label>
        Password:
        <input type="text" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
      </label>
      <input type="submit" value="Register" />
    </form>
    </div>
  );


}
