import { Fragment, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

const FIREBASE_URL = 'https://gh-react-app-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesHandler = useCallback(listMovies, []);

  useEffect(() => {
    moviesHandler();
  }, [moviesHandler]);

  async function listMovies() {
    try {
      setError(null);
      setIsLoading(true);

      const { data } = await axios.get(FIREBASE_URL);
      console.log('Movies: ', data ? Object.keys(data).length : 0);

      const moviesList = [];
      for (const key in data) {
        moviesList.push({
          id: key,
          title: data[key].title,
          release: data[key].release,
          description: data[key].description,
        });
      }
      setMovies(moviesList);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    setIsLoading(false);
  }

  const addMovieHandler = async (movie) => {
    const { data } = await axios.post(FIREBASE_URL, movie);
    console.log(data);
  };

  return (
    <Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {!isLoading && error && <p>Something went wrong!</p>}
        {isLoading ? <p>Loading...</p> : <Movies movies={movies} />}
      </section>
      <section>
        <button onClick={listMovies}>List Movies</button>
      </section>
    </Fragment>
  );
}

export default App;
