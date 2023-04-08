import React, { useRef } from "react";
const AddMovie = (props) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
        <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
        </div>
        <div>
          <label htmlFor="date">Release Date</label>
          <input type="text" id="date" ref={releaseDateRef} />
        </div>
        <button>Add Movie</button>
      </form>
    </div>
  );
};
export default AddMovie;