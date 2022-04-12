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

export default function CreateSong(props) {
  const [songUsername, setSongUsername] = useState("")
  const [songTitle, setSongTitle] = useState("")
  const [songArtist, setSongArtist] = useState("")
  const [songRating, setSongRating] = useState("")

  const handleSubmit = (formData) => {
    // make axios request to mybackend.com/newSong, with context of username=songUsername
    console.log("submitted")


    axios.post('http://localhost:8000/api/ratings/post/', {
    user: songUsername,
    artist:songArtist,
    song:songTitle,
    rating:songRating,
    song_id:0
    //user_id:0
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });};


  return (

    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={songUsername} onChange={e => setSongUsername(e.target.value)}/>
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
        <input type="text" value={songRating} onChange={e => setSongRating(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

// export default CreateSong;

//
// // code from the Internet
//
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// };
