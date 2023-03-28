import React from 'react';

import Para from './Para';

const Demo = (props) => {
  console.log('Demo Component');
  return <Para>{props.show ? 'New Paragraph' : ''}</Para>;
};

export default React.memo(Demo);
