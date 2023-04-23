import { useState } from 'react';

const Input = (props) => {
  const [name, setName] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isNameValid = name.trim().length ? true : false;
  const isNameInputInvalid = isTouched && !isNameValid;
  const isFormValid = isNameValid ? true : false;

  const submitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (!isNameValid) return;
    setName('');
    setIsTouched(false);
  };

  const nameBlurHandler = (event) => setIsTouched(true);
  const nameChangeHandler = (event) => setName(event.target.value);

  const nameInputClass = isNameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onBlur={nameBlurHandler} onChange={nameChangeHandler} />
        {isNameInputInvalid && <p className='error-text'>Name must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default Input;
