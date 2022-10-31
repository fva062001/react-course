import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    return await axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        const transformedMovies = response.data.results.map((data) => {
          return {
            id: data.episode_id,
            title: data.title,
            openingText: data.opening_crawl,
            releaseDate: data.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies</p>}
      </section>
    </>
  );
}

export default App;
