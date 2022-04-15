import React, { useState, useEffect } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";

const history = useNavigate();

function DeleteButton(props) {
  return (
    <div>
      <button
        // className="button"
        onClick={(e) => {
          e.preventDefault();
          const req =  axios.delete("http://localhost:8000/api/artists/" + props.deleting + "/", {}).then(function(req){navigate("/App.js")
        });
        }
      }

      >
        Delete
      </button>
      {/* </a> */}
    </div>
  );
}

export default DeleteButton;
