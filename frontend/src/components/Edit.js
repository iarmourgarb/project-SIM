import React, { useState, useEffect } from 'react';
function Edit() {
  const [rating, setRating] = useState(0);


  if props.IsTrue then
  return (<div> hello </div>)

// else  blahhhhh retuirn this below
  useEffect(() => {   document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>Please insert the new rating below</p>
      <form onSubmit={handleSubmit}>
      <label>
        Edit Your Rating:
        <input type="number" value={songRating} onChange={e => setSongRating(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
      </form>
      <button
        // className="button"
        onClick={(e) => {
          e.preventDefault();
          axios.delete("http://localhost:8000/api/artists/pk/delete" + props.rating_id + "/", {props});
        }}
      >
        Delete Your Rating
      </button>
    </div>
  );
}
