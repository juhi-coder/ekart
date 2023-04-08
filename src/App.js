import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
const DB_URL =
  "https://ekart-website-a0b79-default-rtdb.firebaseio.com/movies.json";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(DB_URL);

      if (!response.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await response.json();

      const loadMovies = [];
      for (const key in data) {
        loadMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    movieHandler();
  }, [movieHandler]);

  async function AddMovieHandler(movie) {
    const response = await fetch(
      DB_URL,

      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const deleteMovieHandler = async (id) => {
    const response = await fetch(`DB_URL ${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    });
    movieHandler();
    const data = await response.json();
    console.log(data);
  };

  let content = <p>found no movies</p>;

  if (movies.length > 0) {
    content = <MovieList  movies={movies} onDeleteMovie={deleteMovieHandler} ></MovieList>;
    console.log(movies);
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading..........</p>;
  }

  return (
   <div>
      <section>
        <AddMovie onAddMovie={AddMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={movieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      </div>
  );
}

export default App;
