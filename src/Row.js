import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";

function Row(props) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.fetchURL);
      console.log(req);
      return req;
    }
    fetchData();
  }, []);
  return (
    <div>
      {/* title */}
      <h1>{props.title}</h1>
      {/* poster */}
    </div>
  );
}

export default Row;
