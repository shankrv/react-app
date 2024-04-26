import { useState } from 'react';

export default function Login() {
  const [input, setInput] = useState({ email: '', password: '' });
  const [invalid, setInvalid] = useState({ email: false, password: false });

  function submitHandler(event) {
    event.preventDefault();
    console.log(input);
  }

  function blurHandler(id, event) {
    setInvalid((prev) => ({
      ...prev,
      [id]: id === 'email' ? !event.target.value.includes('@') : !(event.target.value.length > 6),
    }));
  }

  function changeHandler(id, event) {
    setInput((prev) => ({ ...prev, [id]: event.target.value }));
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={input.email}
            onBlur={(e) => blurHandler('email', e)}
            onChange={(e) => changeHandler('email', e)}
          />
          <div className='control-error'>{invalid.email && <p>Please enter a valid email</p>}</div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={input.password}
            onBlur={(e) => blurHandler('password', e)}
            onChange={(e) => changeHandler('password', e)}
          />
          <div className='control-error'>{invalid.password && <p>Password must be more than 6 chars</p>}</div>
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
