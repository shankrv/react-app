// import { useState } from 'react';
import { useInput } from '../hooks/useInput';
import Input from './Input';

export default function Login() {
  /**
   const [input, setInput] = useState({ email: '', password: '' });
   const [invalid, setInvalid] = useState({ email: false, password: false }); 
   */

  const {
    input: email,
    invalid: invalidEmail,
    blurHandler: emailBlur,
    changeHandler: emailChange,
  } = useInput('', (value) => !value.includes('@'));

  const {
    input: password,
    invalid: invalidPassword,
    blurHandler: passwordBlur,
    changeHandler: passwordChange,
  } = useInput('', (value) => !(value.length > 6));

  function submitHandler(event) {
    event.preventDefault();
    if (!email || !password) return;
    if (invalidEmail || invalidPassword) return;
    console.log({ email, password });
  }

  /** 
   function blurHandler(id, event) {
     setInvalid((prev) => ({
       ...prev,
       [id]: id === 'email' ? !event.target.value.includes('@') : !(event.target.value.length > 6),
     }));
   }
 
   function changeHandler(id, event) {
     setInput((prev) => ({ ...prev, [id]: event.target.value }));
   } 
   */

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          id='email'
          label='Email'
          type='email'
          name='email'
          // value={input.email}
          // error={invalid.email && 'Please enter a valid email'}
          // onBlur={(e) => blurHandler('email', e)}
          // onChange={(e) => changeHandler('email', e)}
          value={email}
          error={invalidEmail && 'Please enter a valid email'}
          onBlur={emailBlur}
          onChange={emailChange}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          name='password'
          // value={input.password}
          // error={invalid.password && 'Password must be more than 6 chars'}
          // onBlur={(e) => blurHandler('password', e)}
          // onChange={(e) => changeHandler('password', e)}
          value={password}
          error={invalidPassword && 'Password must be more than 6 chars'}
          onBlur={passwordBlur}
          onChange={passwordChange}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
