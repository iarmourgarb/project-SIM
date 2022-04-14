import React, { useState, useEffect } from "react";
import axios from "axios"


function EditButton(props) {
  return (
    // <div className="content">
    <div>
      <button
        // className="button"
        onClick={(e) => {
          e.preventDefault();
          const req =  axios.post("http://localhost:8000/api/rating/find/", {
            user : "",
            song_id : props.song_id,
            rating : 0,
          });

          // .then(function(req){
          //   // how do I show this componenet?
          // set a loading value?
          //   // reset component to show to true
          //   <Edit>
          //
          // })

          // .catch(error){
          //   console.log(error)
          // }

          // "status","id","rating"
        }}

      >
        Edit
      </button>
      {/* </a> */}
    </div>
  );
}

export default EditButton;
