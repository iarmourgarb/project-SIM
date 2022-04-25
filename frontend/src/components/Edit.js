import React, { useState, useEffect, useCookie } from 'react';
import axios from "axios";
import {getCookie} from "react-use-cookie";

function deleteMe(props) {
  const req =  axios.post("http://localhost:8000/api/ratings/find/", {
    user : getCookie("user"),
    song_id : props.song.id
  }, {
      headers: {
        Authorization: 'token ' + getCookie('token')
      }})

  .then(function(response){
    console.log(response)

  const req2 = axios.delete("http://localhost:8000/api/ratings/" + response.data.id +'/', {
  headers: {
    Authorization: 'token ' + getCookie('token')
  }
})});

}


export default function Edit(props) {
  const [rating, setRating] = useState(0)
  // const [songrating, setsongRating] = useState(0)
  const handleSubmit2 = (formData) => {
  const req =  axios.put("http://localhost:8000/api/ratings/", {
    user : getCookie("user"),
    song_id : props.song.id,
    rating: rating
  },{
      headers: {
        Authorization: 'token ' + getCookie('token')
      }})};

  return (
    <div>
        {props.IsTrue ? (
     (<div> no song selected </div>)) : (
     <div>
         <p>Please insert the new rating below</p>
         <form  onSubmit={handleSubmit2}>
             <label>
               Edit Your Rating:
               <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
             </label>
               <input type="submit" value="Submit" />
         </form>
       <button
         onClick={(e) => {
           e.preventDefault();
           deleteMe(props);
           // console.log(props)
           // axios.delete("http://localhost:8000/api/ratings/" + props.song.id+'/', {props}
           // );
         }} >
         Delete Your Rating
         </button>
 </div> )
   }
    </div>)

}
