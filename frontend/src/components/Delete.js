import React, { useState, useEffect } from "react";
import axios from "axios";
import {getCookie} from "react-use-cookie";
// import {useNavigate} from "react-router-dom";


function DeleteButton(props) {
  return (
    <div>
      <button
        // className="button"
        onClick={(e) => {
          e.preventDefault();
          const req =  axios.delete("http://127.0.0.1:8000/api/artists/" + props.deleting + "/", {
  headers: {
  Authorization: 'Token ' + getCookie('token')
  }
})
          .then(function(response){window.location.reload(false)
          })

        }
        }


      >
        Delete
      </button>
      {/* </a> */}
    </div>
  )
}

export default DeleteButton;
