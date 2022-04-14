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
  const [state, setState] = useState('not_auth');
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
        const response = await axios.post("http://localhost:8000/api/auth/", details);
        return response.data;
      } catch (err){
      }
    };


const handleSubmit = async (evt) => {
    const details = {username: userUsername, password: userPassword};
    var response = await myReq(details);
      console.log(response);
      setUserIDToken(response.token);
      setUserToken(response.user);
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



  // const handleSubmit = async (formData) => {
  //    res = axios.post('http://127.0.0.1:8000/api/auth/', {username: userUsername, password: userPassword})
  //    .then((res) => setUserToken("test"));
  //    setUserToken(res.data.token)
    //  .catch((error) => ("akusdgasliuydgsahjlgh"));
    // make axios request to mybackend.com/newSong, with context of username=songUsername
    // try{
    // console.log("submitted")
    
    // axios.post('http://localhost:8000/api/auth/', {
      // username: userUsername,
      // password: userPassword,
    // });
    // setUserToken(response.data.token);
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
// };


// return (
//   <div>
//   <form onSubmit={handleSubmit}>
//     <label>
//       Username:
//       <input type="text" value={userUsername} onChange={e => setUserUsername(e.target.value)}/>
//     </label>
//     <label>
//       Password:
//       <input type="text" value={userPassword} onChange={e => setUserPassword(e.target.value)} />
//     </label>
//     <input type="submit" value="Submit" />
//   </form>
//   </div>
// );

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
