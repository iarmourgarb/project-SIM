import React, { useState, useEffect } from "react";
import axios from "axios"


function EditButton(props) {
  return (
    // <div className="content">
    <div>
      <button
        // className="button"
        onClick={(e) => {
          props.setIsTrue(true);
          e.preventDefault();
          const req =  axios.post("http://localhost:8000/api/rating/find/", {
            user : 1,
            song_id : props.song.id,
            rating : 0,
          })

          .then(function(req){
            // how do I show this componenet?
          // set a loading value?
            // reset component to show to tru
            // setEdit(true)

          })

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
