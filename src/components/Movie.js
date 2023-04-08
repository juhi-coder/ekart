import React from 'react'
const Movie = (props) => {
  function deleteMovie(){
    props.onDeleteMovie(props.id)
    
  }
  return (
    
    <li key={props.id}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      <button onClick={deleteMovie}>Delete Movie</button>
    </li>
    
  )
}

export default Movie