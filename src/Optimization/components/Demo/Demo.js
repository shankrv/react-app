import Para from './Para';

const Demo = (props) => {
  console.log('Demo Component');
  return <Para>{props.show ? 'New Paragraph' : ''}</Para>;
};

export default Demo;
