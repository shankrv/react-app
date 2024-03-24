import useInput from '../hooks/useInput';

const Form = (props) => {
  const fname = useInput((input) => (input.trim().length ? true : false));
  const lname = useInput((input) => (input.trim().length ? true : false));
  const email = useInput((input) => input.trim().includes('@'));

  const isFormValid = fname.isValid && lname.isValid && email.isValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    fname.reset();
    lname.reset();
    email.reset();
  };

  const fnameInputClass = fname.hasError ? 'form-control invalid' : 'form-control';
  const lnameInputClass = lname.hasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = email.hasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={fnameInputClass}>
          <label htmlFor='fname'>First Name</label>
          <input type='text' id='fname' value={fname.value} onBlur={fname.blurHandler} onChange={fname.changeHandler} />
          {fname.hasError && <p className='error-text'>First Name must be valid.</p>}
        </div>
        <div className={lnameInputClass}>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' value={lname.value} onBlur={lname.blurHandler} onChange={lname.changeHandler} />
          {lname.hasError && <p className='error-text'>Last Name must be valid.</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={email.value} onBlur={email.blurHandler} onChange={email.changeHandler} />
        {email.hasError && <p className='error-text'>Email must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
