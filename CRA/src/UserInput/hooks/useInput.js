import { useReducer } from 'react';

const inputReducer = (state, action) => {
  if (action.type === 'blur') return { value: state.value, isTouched: true };
  if (action.type === 'input') return { value: action.value, isTouched: state.isTouched };
  if (action.type === 'reset') return { value: '', isTouched: false };
  return state;
};

const useInput = (validator) => {
  // const [value, setValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);
  const [state, dispatch] = useReducer(inputReducer, { value: '', isTouched: false });

  const isValid = validator(state.value);
  const hasError = state.isTouched && !isValid;

  // const blurHandler = () => setIsTouched(true);
  // const changeHandler = (event) => setValue(event.target.value);
  const blurHandler = () => dispatch({ type: 'blur' });
  const changeHandler = (event) => dispatch({ type: 'input', value: event.target.value });

  const reset = () => {
    // setValue('');
    // setIsTouched(false);
    dispatch({ type: 'reset' });
  };

  return { value: state.value, isValid, hasError, blurHandler, changeHandler, reset };
};

export default useInput;
