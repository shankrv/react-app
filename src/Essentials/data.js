import componentsIcon from './assets/components.png';
import jsxIcon from './assets/jsx.png';
import propsIcon from './assets/props.png';
import stateIcon from './assets/state.png';

export const CORE_CONCEPTS = [
  {
    image: componentsIcon,
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxIcon,
    title: 'JSX',
    description: 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsIcon,
    title: 'Props',
    description: 'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateIcon,
    title: 'State',
    description: 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
