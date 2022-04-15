import React, { useState, useEffect, useCookie } from 'react';
import axios from "axios";


export default function Edit(props) {
  const [rating, setRating] = useState(0)
  // const [songrating, setsongRating] = useState(0)
  const handleSubmit = (formData) => {

  const req =  axios.post("http://localhost:8000/api/rating/find/", {
    user : props.userToken,
    song_id : props.song.id
  })

  .then(function(req){
    const req2 = axios.put("http://localhost:8000/api/rating/", {
    id:req.id,
    rating:rating

  })}) ;};

  return (
    <div>
        {props.IsTrue ? (
     (<div> no song selected </div>)) : (
     <div>
         <p>Please insert the new rating below</p>
         <form onSubmit={handleSubmit}>
             <label>
               Edit Your Rating:
               <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
             </label>
               <input type="submit" value="Submit" />
         </form>
       <button
         onClick={(e) => {
           e.preventDefault();
           axios.delete("http://localhost:8000/api/artists/pk/delete" + props.rating_id + "/", {props});
         }} >
         Delete Your Rating
         </button>
 </div> )
   }
    </div>)

}
