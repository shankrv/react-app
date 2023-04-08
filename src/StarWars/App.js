import { Fragment, useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

import Movies from './components/Movies';

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
      const { data } = await axios.get('https://swapi.dev/api/films');
      const films = data.results.map((film) => {
        return { id: film.episode_id, title: film.title, release: film.release_date, description: film.opening_crawl };
      });
      setMovies(films);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <Fragment>
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
