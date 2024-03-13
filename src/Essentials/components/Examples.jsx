import { useState } from 'react';
import Section from './Section';
import TabButton from './TabButton';

import { EXAMPLES } from '../data';

export default function Examples() {
  const [selected, setSelected] = useState('components');

  function selectHandler(selection) {
    setSelected(selection);
  }

  const content = EXAMPLES[selected];
  return (
    <Section id='examples' title='Examples'>
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
    </Section>
  );
}
