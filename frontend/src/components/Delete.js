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
          axios.delete("http://localhost:8000/api/artists/pk/delete", {props});
        }}
      >
        Delete
      </button>
      {/* </a> */}
    </div>
  );
}

export default DeleteButton;
