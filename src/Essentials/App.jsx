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

  const content = EXAMPLES[selected];

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selected === 'components'} onClick={() => selectHandler('components')}>
              Components
            </TabButton>
            <TabButton isActive={selected === 'jsx'} onClick={() => selectHandler('jsx')}>
              JSX
            </TabButton>
            <TabButton isActive={selected === 'props'} onClick={() => selectHandler('props')}>
              Props
            </TabButton>
            <TabButton isActive={selected === 'state'} onClick={() => selectHandler('state')}>
              State
            </TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            <pre>
              <code>{content.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
