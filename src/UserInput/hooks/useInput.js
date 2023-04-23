import { useState } from 'react';

const useInput = (validator) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validator(value);
  const hasError = isTouched && !isValid;

  const blurHandler = () => setIsTouched(true);
  const changeHandler = (event) => setValue(event.target.value);

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return { value, isValid, hasError, blurHandler, changeHandler, reset };
};

export default useInput;
