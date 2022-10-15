import React, { useState,useReducer,useEffect,useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (lastState, action) =>{
  if(action.type === 'USER_INPUT')
  {
    return {value:action.val,isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:lastState.value, isValid: lastState.value.includes('@')};
  }
  return {value:'',isValid: false};
};

const passwordReducer = (lastState, action) =>{
  if(action.type === 'USER_INPUT')
  {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR')
  {
    return {value:lastState.value, isValid:lastState.value.trim().length > 6};
  }
  return {value:'',isValid:false}
}

function Login(props){
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //Object destructuring
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid:null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:null});
  const {isValid:emailIsValid} = emailState.isValid;
  const {isValid:passwordIsValid} = passwordState.isValid;
  
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  
  //! useEffect hook usage
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    },500)

    //Cleanup Function
    return () =>{
      clearTimeout(timer);
    }
  },[emailState.isValid,passwordState.isValid]);



  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT', val:event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT', val:event.target.value});

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid){

    }
    else{

    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' label='E-mail'type='email' isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        <Input type='password'id='password' label='Password' isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
