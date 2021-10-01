import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://api.tvmaze.com/search/shows?q=all";


// fetching data from the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}`);
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  return (
    <>
      <div className="movieList mt-3">
        <div className="row g-0 flex-grow-1 ">
          <div className="col-11 mx-auto ">
            <div className="listContainer">
              <span className="title">Popular Shows</span>
              <div className="movieWrapper row p-4 flex-wrap">
              
                {movies &&
                  movies.map((movie) => {
                    return <ListItems movie={movie} key={movie.show.id} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
