import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="Signin-form">
        <h1>SIGN IN / SIGN UP</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="pic"
          />
          Sign In with Google
        </button>
        <div style={{ textAlign: 'center', fontSize: 13 }}>OR</div>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="pic"
          />
          Sign up with Google
        </button>
      </div>
    );
  }
}

export default SignIn;
