// The component will print out the list of all the songs in the database with their ratings


  import React, { useEffect, useState } from "react";
  // //make sure to run 'npm install flatlist-react'
  // import FlatList from 'flatlist-react';
  import axios from "axios";

  export default function Read() {
    // Initially, set isLoading to true and set up the setLoading function for
    // later changing the isLoading value.
    const [isLoading, setLoading] = useState(true);
    // Initially, set data to an empty array and set up the setData function for
    // later changing the data value to the fetched data.
    const [data, setData] = useState([]);

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



    return (
      // Now the component parses the data and renders it using a FlatList component.
      <div style={{ flex: 1, padding: 24 }}>
        {/* As long as isLoading is true, show "Loading ..." */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          // Once it is false, show the fetched data.
          <div
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 18, color: "black", textAlign: "center" }}>
              Song
            </p>
            <p
              style={{
                fontSize: 14,
                color: "green",
                textAlign: "center",
                paddingBottom: 10,
              }}
            >   {data.artist}
              Artist:
            </p>
            <FlatList
              data={data.artist}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <p>{item.id + ". " + item.title}</p>
              )}
            />
            <FlatList
              data={data.avgRating}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <p>{item.id + ". " + item.title}</p>
              )}
            />

          </div>
        )}
      </div>
    );
  }
