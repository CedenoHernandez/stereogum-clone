import React, { Component } from 'react';

class SignUp extends Component {

  render() {
    return(
      <div className="signup">
        <h2>Sign up for the Stereogum Digest</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button className="signup-btn">SUBMIT</button>
        </form>
        <p className="signup-p">
          By clicking Submit, I agree to the Terms of Use and Privacy Policy.
        </p>
      </div>
    )
  }
};

export default SignUp;