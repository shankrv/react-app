import { useRef } from 'react';

import classes from './AddMovie.module.css';

const AddMovie = (props) => {
  const titleRef = useRef('');
  const releaseRef = useRef('');
  const descriptionRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();
    const movie = {
      title: titleRef.current.value,
      release: releaseRef.current.value,
      description: descriptionRef.current.value,
    };
    props.onAddMovie(movie);
    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='release'>Release</label>
        <input type='text' id='release' ref={releaseRef}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor='desc'>Description</label>
        <textarea rows='4' type='text' id='desc' ref={descriptionRef}></textarea>
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
