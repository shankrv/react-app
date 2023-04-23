import useInput from '../hooks/useInput';

const Input = (props) => {
  const name = useInput((input) => (input.trim().length ? true : false));
  const email = useInput((input) => input.trim().includes('@'));

  const isFormValid = name.isValid && email.isValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    name.reset();
    email.reset();
  };

  const nameInputClass = name.hasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = email.hasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' value={name.value} onBlur={name.blurHandler} onChange={name.changeHandler} />
        {name.hasError && <p className='error-text'>Name must be valid.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='name'>Email</label>
        <input type='text' id='email' value={email.value} onBlur={email.blurHandler} onChange={email.changeHandler} />
        {email.hasError && <p className='error-text'>Email must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default Input;
