import classes from './Movies.module.css';

import Movie from './Movie';

const Movies = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} release={movie.release} description={movie.description} />
      ))}
    </ul>
  );
};

export default Movies;
