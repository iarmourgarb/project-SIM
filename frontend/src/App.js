import logo from './logo.svg';
import './App.css';
import './Form.css'
import axios from "axios";
import React, { useEffect, useState, useBetween, useCookie } from "react";
import Create from "./components/Create";
import CreateSong from "./components/Create";
import Read from "./components/Read";
import Login from "./components/Login";
import LogIn from "./components/Login";
import NewUser from "./components/NewUser";
import AddUser from "./components/NewUser";




function App() {
    const [userState,setUserState] = useState('not_auth');


  return (
    <div>

    {userState == "logged-in" ?

        <div>
        <br></br><br></br>
            <Create/>
        <br></br><br></br>
            <Read setUserState={userState}/>
        </div>

          :
          <div>
          <br></br><br></br><br></br>
             <LogIn setUserState={setUserState}/>
          <br></br><br></br><br></br>
              <NewUser/>
          </div>


    }

    </div>
  );
}

export default App;
