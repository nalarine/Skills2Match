// GoogleSignInButton.js
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const GoogleSignInButton = ({ onGoogleSignIn }) => {
  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        onGoogleSignIn(result.user);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <button onClick={SignUpUsingGoogle} type="button" className="login-with-google-btn">
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;
