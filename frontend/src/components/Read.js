// The component will print out the list of all the songs in the database with their ratings


  import React, { useEffect, useState } from "react";
  // //make sure to run 'npm install flatlist-react'
  //import FlatList from 'flatlist-react';
  import axios from "axios";
  import DeleteButton from "./Delete";
  import EditButton from "./EditButton";
  import {Button} from "reactstrap"



  export default function Read() {
    // Initially, set isLoading to true and set up the setLoading function for
    // later changing the isLoading value.
    const [isLoading, setLoading] = useState(true);
    // Initially, set data to an empty array and set up the setData function for
    // later changing the data value to the fetched data.
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(false)

    // The useEffect hook is similar to the componentDidMount and
    // componentDidUpdate in class components. For our anonymoust function, we will
    // have one parameter, fetch(), and an empty function body.
    // Note that items in a Django database can be retrieved that way as well.
    // Try it out with Postman.

    // rewrite as try catch

    const myFunc = async (event) => {
      // Pass the URL to the fetch API.
      try {
        const response = await axios.get("http://localhost:8000/api/artists/")
        //console.log(response.data);
        return response.data
        //setData(response.data)
        //setLoading(false)
        // console.log(event)
        // console.log(data);
        // console.log(response.data)
      } catch (err){
        console.error(err);
      }
    }


    useEffect(async () => {
      var response = await myFunc();
      console.log(response);
      setData(response);
      setLoading(false);

      // axios.get("http://localhost:8000/api/artists/")
      //   // Parse the response object and extract the json response that is obtained.
      //   .then((response) => response.data)
      //   // Set the empty data variable to the fetched data.
      //   .then((json) => setData(json))
      //   // Catch any errors thrown from the fetch call.
      //   .catch((error) => console.error(error))
      //   // While the data is loading, show the isLoading view below.
      //   // Once setLoading() sets isLoading to false, show the view with the
      //   // loaded data.
      //   .finally(() => setLoading(false));
    }, []);


    // function displaySongs(data){
    //    let table = '<table border="1">';
    //    table += `<tr><th>Song</th><th>Artist</th></tr>`;
    //    data.forEach((song, index) => {
    //        table = table + `<tr>`;
    //        table = table + `<td>Title: ${song.song}</td>`;
    //        table = table + `<td>Title: ${song.artist}</td>`;
    //        // table = table + `<td>Title: ${song.avg_rating}</td>`;
    //        table += `</tr>`;
    //     });
    //     table += "</table>";
    //     // console.log("data-list")
    //     document.getElementById("data-list").innerHTML = table;
    //     // if (data !== null)
    //     // {document.getElementById("data-list").innerHTML = table;}
    //     // else {document.write("Loading...")}
    // }
    // {displaySongs(data)};

    // const fetchAllDataToTable(async () => {
    //   var response = await myFunc();
    //   console.log(response);
    //   setData(response);
    //   setLoading(false);

      // axios.get("http://localhost:8000/api/artists/")
      //   // Parse the response object and extract the json response that is obtained.
      //   .then((response) => response.data)
      //   // Set the empty data variable to the fetched data.
      //   .then((json) => setData(json))
      //   // Catch any errors thrown from the fetch call.
      //   .catch((error) => console.error(error))
      //   // While the data is loading, show the isLoading view below.
      //   // Once setLoading() sets isLoading to false, show the view with the
      //   // loaded data.
      //   .finally(() => setLoading(false));
    // }, []);


    return(
        <div>
        {isLoading ? (
            <p>Loading...</p>
        ) : (
          <div>
            <div>
                <table border="1">
                  <thead><tr><th>Song</th><th>Artist</th><th>Rating</th></tr></thead>
                  <tbody>
                 {data ? (data.map(el =>
                  <tr>
                  <td>{el.song}</td>
                  <td>{el.artist}</td>
                  <td>{el.avg_rating}</td>
                  <td><DeleteButton deleting={el.id}/></td>
                  <td><EditButton song_id={el.id}/></td>
                  </tr>
                )) : "No songs rated"}
                </tbody>
                </table>
            </div>

            <div>
            "No songs rated"
            </div>
            </div>
          )}
        </div>

)
}
