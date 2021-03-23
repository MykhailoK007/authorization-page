import React from 'react';
import './styles.scss';

type TLoginProps = {};

export const Login: React.FC<TLoginProps> = props => {
  return (
    <div className='login-page'>
      <div className='login-page__bg'></div>
      <div className='login-page__form'>
        <div className='login-page__form-header'>
          <div className='title'>Log in</div>
          <div className='subtitle'>
            If you don`t have an account yet please <span>register</span> first
          </div>
        </div>
        <div className='login-page__form-body'>
          <div className='login-page__form-body-inputs'>
            <input type='email' placeholder='Your e-mail' />
            <input type='password' placeholder='Your password' />
          </div>
          <div className='login-page__form-body-actions'>
            <div className='remember-password'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <div className='restore-password'>
              <span>I forgot my password</span>
            </div>
          </div>
        </div>
        <button className='login-page__form-submit'>Log In</button>
      </div>
    </div>
  );
};
