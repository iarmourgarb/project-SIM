import React, { useState, useEffect } from "react";
import axios from "axios"


function DeleteButton(props) {
  return (
    // <div className="content">
    <div>
      <button
        // className="button"
        onClick={(e) => {
          e.preventDefault();
          const req =  axios.delete("http://localhost:8000/api/artists/" + props.deleting + "/", {}).then(function(response){window.location.reload(true)})
        }}

      >
        Delete
      </button>
      {/* </a> */}
    </div>
  );
}

export default DeleteButton;
