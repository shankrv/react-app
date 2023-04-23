import { useRef, useState } from 'react';

const Input = (props) => {
  const nameRef = useRef();
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsNameTouched(true);
    const name = nameRef.current.value.trim();
    if (name.length) setIsNameValid(true);
    else setIsNameValid(false);
    event.target.reset();
  };

  const isNameInputInvalid = isNameTouched && !isNameValid;
  const nameInputClass = isNameInputInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
        {isNameInputInvalid && <p className='error-text'>Name must be valid.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Input;
