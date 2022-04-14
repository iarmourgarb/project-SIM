import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "./Delete";
import {Button} from "reactstrap"
import Read from "./Components/Read"


// Landing page will be passed into App.js

export default function LogIn(props) {
  const [userUsername, setUserUsername] = useState("")
  const [userPassword, setUSerPassword] = useState("")
  const handleSubmit = (formData) => {
    // make axios request to mybackend.com/newSong, with context of username=songUsername
    console.log("submitted")

    //  modify to our address
    const res = await axios.get('https://httpbin.org/basic-auth/foo/bar', {
  // Axios looks for the `auth` option, and, if it is set, formats a
  // basic auth header for you automatically.
  auth: {
    user_id: userUsername,
    password: userPassword,
  }
});
// res.status; // 200  unsure here, maybe res.refresh can be used in the delete?


    await axios.auth('http://localhost:8000/api/users/post/', {
      user_id: userUsername,
      password:userPassword,
    })
    .then(function (response) {
      <Read>, {cookie};
    })
    .catch(function (error) {
      console.log(error);

    // create cookie to pass?
    });};
