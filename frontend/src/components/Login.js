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
  const [state, setState] = useState('not_auth')

  const [userUsername, setUserUsername] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userToken, setUserToken] = useCookie('token', '0');
  const handleSubmit = async (formData) => {
     axios.post('http://localhost:8000/auth/', {username: userUsername, password: userPassword})
     .then((response) => {console.log("ASDASDASDAS"); setUserToken('bye'); setState('logged-in')})
     .catch((error) => console.log("akusdgasliuydgsahjlgh"));
    // make axios request to mybackend.com/newSong, with context of username=songUsername
    // try{
    // console.log("submitted")
    //
    // const res = await axios.post('http://localhost:8000/auth/', {
    //   username: userUsername,
    //   password: userPassword,
    // });
    // setUserToken("hi")}
    // catch(err){
    //     console.error(err)
    // }

    //  modify to our address
    // res is token associated with the user, put res into a cookie using usecookie
    //const res = await axios.post('https://localhost:8000/auth', {
        // withCredentials: true,
        // credentials: 'include',
  // Axios looks for the `auth` option, and, if it is set, formats a
  // basic auth header for you automatically.
  // auth: {
  //   user_id: userUsername,
  //   password: userPassword,
  // }
};

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
    <input type="submit" value="Submit" />
  </form>
  </div>
);

// res.status; // 200  unsure here, maybe res.refresh can be used in the delete?


    // await axios.auth('http://localhost:8000/api/users/post/', {
    //   user_id: userUsername,
    //   password:userPassword,
    // })
    // .then(function (response) {
    //   <Read>, {cookie};
    // })
    // .catch(function (error) {
    //   console.log(error);
    //
    // // create cookie to pass?
    // }


}
