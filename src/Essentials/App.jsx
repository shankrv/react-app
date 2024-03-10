import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selected, setSelected] = useState('components');

  function selectHandler(selection) {
    setSelected(selection);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => selectHandler('components')}>Components</TabButton>
            <TabButton onClick={() => selectHandler('jsx')}>JSX</TabButton>
            <TabButton onClick={() => selectHandler('props')}>Props</TabButton>
            <TabButton onClick={() => selectHandler('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>
              <code>{EXAMPLES[selected].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
