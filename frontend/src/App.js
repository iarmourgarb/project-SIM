import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState, useBetween } from "react";
import Create from "./components/Create";
import CreateSong from "./components/Create";
import Read from "./components/Read";
import Login from "./components/Login";
import LogIn from "./components/Login";



function App() {

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
  //   <CreateSong handleSubmit={handleSubmit}/>
    <div>

    //this state needs to be the one from Login.js
    //passed thru props
    {state === 'not_auth' && (
        <LogIn logIn={() => setState('logged-in') } />
      )}
    {state === 'logged-in' && <Create/> && <Read/>}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
