import './Login.css';
import LoginPage from './LoginPage';
import React, { Fragment } from 'react';
import { FooterLink, FooterPolicyAndTerms } from 'components/Footer';

function Login() {
  return (
    <Fragment>
      <LoginPage />
      <FooterLink />
      <FooterPolicyAndTerms />
    </Fragment>
  );
}

export default Login;
