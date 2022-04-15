import React, {useState} from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

// This form will be for adding a song with a writing into the database

export default function DeleteSong(props) {
  const [songArtist, setSongArtist] = useState("")
  const [songTitle, setSongTitle] = useState("")
  const handleSubmit = (formData) => {
    // make axios request to mybackend.com/newSong, with context of username=songUsername
    console.log("submitted")

    axios.delete('http://localhost:8000/api/artists/' + props.deleting + "/", {}, {
  headers: {
  Authorization: 'token ' + getCookie('token')
  }
})

    .then(function (response) {
      console.log(response);
      setData(response)
    })
    .catch(function (error) {
      console.log(error);
    });};

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="number" value={songUsername} onChange={e => setSongUsername(e.target.value)}/>
      </label>
      <label>
        Song Title:
        <input type="text" value={songTitle} onChange={e => setSongTitle(e.target.value)} />
      </label>
      <label>
        Artist:
        <input type="text" value={songArtist} onChange={e => setSongArtist(e.target.value)} />
      </label>
      <label>
        Rating:
        <input type="number" value={songRating} onChange={e => setSongRating(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}
