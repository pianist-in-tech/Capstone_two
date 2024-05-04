
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginComponent = ({ onSignIn }) => {
  const responseMessage = (response) => {
    console.log("Google Login Success:", response);
    if (onSignIn) {
      onSignIn(response);
    }
  };

  const errorMessage = (error) => {
    console.error("Google Login Error:", error);
  };

  return (
    <div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default GoogleLoginComponent;
