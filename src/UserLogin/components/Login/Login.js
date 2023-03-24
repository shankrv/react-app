import { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import AuthContext from '../../context/auth';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') return { value: action.value, isValid: action.value.includes('@') };
  if (action.type === 'INPUT_BLUR') return { value: state.value, isValid: state.value.includes('@') };
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') return { value: action.value, isValid: action.value.trim().length > 6 };
  if (action.type === 'INPUT_BLUR') return { value: state.value, isValid: state.value.trim().length > 6 };
  return { value: '', isValid: false };
};

const Login = () => {
  const context = useContext(AuthContext);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [password, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('state-update');
      setFormIsValid(email.isValid && password.isValid);
    }, 1000);

    // cleanup function
    return () => {
      console.log('cleanup-function');
      clearTimeout(timer);
    };
  }, [email.isValid, password.isValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
    // setFormIsValid(event.target.value.includes('@') && password.value.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
    // setFormIsValid(email.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type='email'
          id='email'
          value={email.value}
          label='E-Mail'
          isValid={email.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type='password'
          id='password'
          value={password.value}
          label='Password'
          isValid={password.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
