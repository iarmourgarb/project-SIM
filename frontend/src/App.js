import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState, useBetween } from "react";
import Create from "./components/Create";
import CreateSong from "./components/Create";
import Read from "./components/Read";
import Login from "./components/Login";
import LogIn from "./components/Login";
import NewUser from "./components/NewUser"
import AddUser from "./components/NewUser"



function App() {
    const [userState,setUserState] = useState('not_auth');
  // handleSubmit = (formData) => {
  //   // make axios request to mybackend.com/newSong, with context of username=songUsername
  //   axios.post('localhostadsads/createSong', {
  //   username: songUsername,
  //   artist: songArtist
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  return (
    <div>

    {userState == "logged-in" ?

        <div>
            <Create/>
            <Read/>
        </div>

          :
           <LogIn setUserState={setUserState}/>

    }

    </div>
  );
}

export default App;
