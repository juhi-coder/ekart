import React from 'react'
const Movie = (props) => {
  return (
    <div>
    <li key={props.id}>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
    </li>
    </div>
  )
}

export default Movie