/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import ThemeContext from '../../contexts/ThemeContext';
import imgUrl from './imgUrl';
import './style.scss';
import Input from '../../component/InputField';
export const SignUp = () => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.background.light,
    color: theme.palette.text.inputField,
  };

  const {register, handleSubmit, errors, watch} = useForm();
  const onSubmit = (data) => {
    //Call the sever

    console.log(data);
    console.log('Submitted');
  };

  return (
    <div className="sign-up-container" style={styles}>
      <img className="wave" src={imgUrl.background} />
      <div className="sign-up-content">
        <div className="sign-up-logo">
          <img src={imgUrl.logo} />
        </div>
        <div className="sign-up-form">
          <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <img src={imgUrl.logoFcode} />
            <h2 className="title">Sign Up</h2>
            <Input
              register={register}
              name="email"
              type="text"
              label="Email"
              errors={errors}
              valid={register({
                required: `Email is required`,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <Input
              register={register}
              name="password"
              type="password"
              label="Password"
              errors={errors}
              valid={register({
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            <Input
              register={register}
              name="confirmPassword"
              type="password"
              label="Confirm password"
              errors={errors}
              valid={register({
                required: 'Confirm password is required',
                validate: (value) =>
                  value === watch('password') ||
                  'Password and Confirm password must be the same.',
              })}
            />
            <input type="submit" className="submit-button" value="Submit" />
            <a href="#">Already have an account? Sign In</a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;