import { Fragment, useState } from 'react';
import axios from 'axios';

import './App.css';

import Movies from './components/Movies';

function App() {
  const [movies, setMovies] = useState([]);

  async function listMovies() {
    try {
      const { data } = await axios.get('https://swapi.dev/api/films');
      const films = data.results.map((film) => {
        return { id: film.episode_id, title: film.title, release: film.release_date, description: film.opening_crawl };
      });
      setMovies(films);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <section>
        <Movies movies={movies} />
      </section>
      <section>
        <button onClick={listMovies}>List Movies</button>
      </section>
    </Fragment>
  );
}

export default App;
