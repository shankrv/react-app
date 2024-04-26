import { useState } from 'react';

export function useInput(initial, validation) {
  const [input, setInput] = useState(initial);
  const [invalid, setInvalid] = useState(false);

  function blurHandler() {
    setInvalid(validation(input));
  }

  function changeHandler(event) {
    setInput(event.target.value);
  }

  return { input, invalid, blurHandler, changeHandler };
}
