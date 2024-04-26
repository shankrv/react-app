import { useState } from 'react';

export default function Signup() {
  const [passwordMatch, setPasswordMatch] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    // multiple values
    data.acquisition = fd.getAll('acquisition'); // Array[values]

    // validation
    if (data.password !== data['confirm-password']) {
      setPasswordMatch(false);
      return;
    }

    console.log(data);

    // reset form
    event.target.reset();
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get started ...</p>

      <div className='control'>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email' required />
      </div>

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input id='password' name='password' type='password' required minLength='6' />
        </div>
        <div className='control'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input id='confirm-password' name='confirm-password' type='password' required minLength='6' />
          <div className='control-error'>{!passwordMatch && <p>Passwords does not match.</p>}</div>
        </div>
      </div>
      <hr />

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name' name='first-name' type='text' required />
        </div>
        <div className='control'>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name' name='last-name' type='text' required />
        </div>
      </div>

      <div className='control'>
        <label htmlFor='role'>What best decribes your role?</label>
        <select id='role' name='role' required>
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
          <option value='employee'>Employee</option>
          <option value='founder'>Founder</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className='control'>
          <input id='google' name='acquisition' value='google' type='checkbox' />
          <label htmlFor='google'>Google</label>
        </div>
        <div className='control'>
          <input id='friend' name='acquisition' value='friend' type='checkbox' />
          <label htmlFor='friend'>Referred by friend</label>
        </div>
        <div className='control'>
          <input id='other' name='acquisition' value='other' type='checkbox' />
          <label htmlFor='other'>Other</label>
        </div>
      </fieldset>

      <div className='control'>
        <label htmlFor='terms'>
          <input id='terms' name='terms' type='checkbox' required />I agree to the terms and conditions
        </label>
      </div>

      <p className='form-actions'>
        <button type='reset' className='button button-flat'>
          Reset
        </button>
        <button type='submit' className='button'>
          Sign up
        </button>
      </p>
    </form>
  );
}
