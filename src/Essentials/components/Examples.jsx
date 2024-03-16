import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
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
      <Tabs
        container='menu'
        buttons={
          <>
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
          </>
        }
      >
        <div id='tab-content'>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <pre>
            <code>{content.code}</code>
          </pre>
        </div>
      </Tabs>
    </Section>
  );
}
