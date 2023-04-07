
import './App.css';
import React,{useCallback, useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie'
function App() {
  const[movies,setMovies]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(null);

 
   const  movieHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);


    try{
      const response=await fetch("https://e-commerse-website-eb03a-default-rtdb.firebaseio.com/movies.json");
     
      if(!response.ok)
      {
        throw new Error("'Something went wrong ....Retrying'")
      }
      const data=await response.json();

      const loadMovies=data.results.map((film)=>{
        return{
          id:film.episode_id,
          title:film.title,
          openingText:film.opening_crawl,
          releaseDate:film.release_date
        }
      })
      setMovies(loadMovies);
      
    }catch(error)
    {setError(error.message)}
    setIsLoading(false);
  },[]);
  useEffect(()=>{
    movieHandler();
  },[movieHandler]);

  async function AddMovieHandler(movie){
 const response=await fetch('https://e-commerse-website-eb03a-default-rtdb.firebaseio.com/movies.json',{
  method:'POST',
  body : JSON.stringify(movie),
  headers:{
  'Content-Type':'application/json'
  }
 })
 const data=await response.json();
 console.log(data);
  }

  let content=<p>found no movies</p>

  if(movies.length>0)
  {
    content=<p><MovieList movies={movies}></MovieList></p>
    console.log(movies);
  }
  if(error)
  {
    content=<p>{error}</p>
  }
  if(isLoading)
  {
    content=<p>Loading..........</p>
  }

  return (
    <React.Fragment>
      <div className="App">
      <section>
        <AddMovie onAddMovie={AddMovieHandler}>

        </AddMovie>
      </section>
      <div>
      
        <button onClick={movieHandler}>Fetch Movies</button>
      
      </div>
      {content}
    </div>
    </React.Fragment>
  );
}

export default App;
