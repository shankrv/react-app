import { useState } from 'react';

const Input = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isNameValid = name.trim().length ? true : false;
  const isNameInputInvalid = isTouched && !isNameValid;

  const isEmailValid = email.trim().includes('@');
  const isEmailInputInvalid = isEmailTouched && !isEmailValid;

  const isFormValid = isNameValid && isEmailValid;

  const submitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    setIsEmailTouched(true);
    if (!isFormValid) return;
    setName('');
    setEmail('');
    setIsTouched(false);
    setIsEmailTouched(false);
  };

  const nameBlurHandler = (event) => setIsTouched(true);
  const nameChangeHandler = (event) => setName(event.target.value);
  const emailBlurHandler = (event) => setIsEmailTouched(true);
  const emailChangeHandler = (event) => setEmail(event.target.value);

  const nameInputClass = isNameInputInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClass = isEmailInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name} onBlur={nameBlurHandler} onChange={nameChangeHandler} />
        {isNameInputInvalid && <p className='error-text'>Name must be valid.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Email</label>
        <input type='text' id='email' value={email} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
        {isEmailInputInvalid && <p className='error-text'>Email must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default Input;
