import './Register.css';
import RegisterPage from './RegisterPage';
import React, { Fragment } from 'react';
import { FooterLink, FooterPolicyAndTerms } from 'components/Footer';

function Register() {
  return (
    <Fragment>
      <RegisterPage />
      <FooterLink />
      <FooterPolicyAndTerms />
    </Fragment>
  );
}

export default Register;
