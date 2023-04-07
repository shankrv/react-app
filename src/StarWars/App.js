import { Fragment, useState } from 'react';

import './App.css';

import Movies from './components/Movies';

function App() {
  const [movies, setMovies] = useState([]);

  function listMovies() {}

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
