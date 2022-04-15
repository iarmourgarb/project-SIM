import logo from './logo.svg';
import './App.css';
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
            <Create/>
            <Read setUserState={userState}/>
        </div>

          :
          <div>
             <LogIn setUserState={setUserState}/>
              <NewUser/>
          </div>


    }

    </div>
  );
}

export default App;
