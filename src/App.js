import logo from './logo.svg';
import './App.css';
import React,{Fragment,useState} from 'react';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
function App() {
  const[movies,setMovies]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
   const  movieHandler=(async()=>{
    setIsLoading(true);
    const response=await fetch('https://swapi.dev/api/films/');
    const data=await response.json();
    const transformedMovie=[];
    for(let k in data)
    {
      transformedMovie.push({
        id:k,
        title:data[k].title,
        openingText:data[k].openingText,
        releaseDate:data[k].releaseDate
      })
    }
    setMovies(transformedMovie);
    setIsLoading(false);
  });
  return (
    <div className="App">
      <React.Fragment>
      <section>
        <button onClick={movieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MovieList movies={movies}></MovieList>}
        {!isLoading && movies.length===0 && <p>No Movies Found</p>}
        {isLoading && <p>Loading..........</p>}
      </section>
      </React.Fragment>
    </div>
  );
}

export default App;
