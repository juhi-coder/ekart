import React from "react";
import { useRef } from "react";
const AddMovie=(props)=>{

    const textRef=useRef('');
     const openTextRef=useRef('');
     const  releaseDateRef=useRef('');
    
    const submitHandler=(e)=>{
        e.preventDefault();
       const movie={
        textRef:textRef.current,
        openingTextRef:openTextRef.current,
        releasingDateRef:releaseDateRef.current,
       };
       props.onAddMovie(movie);
    }
    return(
        <div>
           <form onSubmit={submitHandler}>
           <label>Text</label>
            <input type='text' id="title" ref={textRef}></input>
            <label>openText</label>
            <textarea type="text" id="openingText" ref={openTextRef}></textarea>
            <label>releaseDate</label>
            <input type='text' id="relesingdate" ref={releaseDateRef}></input>
            <button>AddMovie</button>
           </form>
        </div>
    )
}
export default AddMovie;