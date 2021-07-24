import React, { useEffect, useState } from "react";
import Axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [randomMovie, setRandomMovie] = useState([]);
  const imgPath = "https://image.tmdb.org/t/p/original";

  function truncate(desc) {
    console.log("desc", desc);
    const n = 150;
    return desc?.length > n ? desc.substr(0, n - 1) + "..." : desc;
  }
  useEffect(() => {
    async function makeRequest() {
      let movie = await Axios.get(request.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * (movie.data.results.length - 1)
      );
      movie = movie.data.results[randomIndex];
      setRandomMovie(movie);
    }
    makeRequest();
  }, []);
  return (
    //  Header with Background image of any random Nx Originals
    <header
      className="banner"
      style={{
        backgroundImage: `url("${imgPath}${randomMovie.backdrop_path}") `,
        // height: "100%",
        backgroundPosition: "center",

        objectFit: "contain",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__container">
        <h1 className="banner__title">{randomMovie.name} </h1>
        {/*  Play button */}
        <button className="playBtn">Play</button>
        {/*  My-list button */}
        <button className="mylistBtn">My List</button>

        {/*  Show Description */}
        {console.log("frm fn", randomMovie.overview)}
        <h5 className="banner__description">
          {truncate(randomMovie.overview)}
        </h5>
      </div>
      <div className="banner__gradient"></div>
    </header>
  );
}

export default Banner;
