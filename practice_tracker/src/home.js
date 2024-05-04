import React from 'react';
import NavBar from './nav';
import './home.css';
import { GoogleLogin } from '@react-oauth/google';

const HomePage = () => (
  <div>
    <NavBar />
    <div className="home-content"> {/* Main content area */}
        <div className="home-left"> {/* Left half */}
          <h1>Welcome to Let's Practice! Tracker</h1>
          <p>This is a brief description of the app.</p>
          {/* Additional information or content */}
        </div>

        <div className="home-right"> {/* Right half */}
        <h1>Sign In!</h1>
        <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log('Login Successful:',credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />
          {/* <GoogleLoginComponent /> Google sign-in form */}
        </div>
      </div>
  </div>
);

export default HomePage;