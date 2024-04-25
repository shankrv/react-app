import { useState } from 'react';

export default function Login() {
  const [input, setInput] = useState({ email: '', password: '' });

  function submitHandler(event) {
    event.preventDefault();
    console.log(input);
  }

  function changeHandler(id, event) {
    setInput((prev) => ({ ...prev, [id]: event.target.value }));
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={input.email} onChange={(e) => changeHandler('email', e)} />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={input.password}
            onChange={(e) => changeHandler('password', e)}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
