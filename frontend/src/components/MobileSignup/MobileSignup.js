import React from "react";
import "./MobileSignup.css";

const MobileSignup = () => {
  return (
    <div className="mobile_signup_container">
      <form>
        <div className="mobile_signup_form">
          <input
            placeholder="e-mail"
            type="text"
            name="mobile_signup_id"
            onChange={() => this._changeId()}
          ></input>
          <input
            placeholder="username"
            type="text"
            name="mobile_signup_username"
            onChange={() => this._changePW()}
          ></input>
          <input
            placeholder="password"
            type="password"
            name="mobile_signup_password"
            onChange={() => this._changePW()}
          ></input>
          <input
            placeholder="confirm password"
            type="password"
            name="mobile_signup_password"
            onChange={() => this._changePW()}
          ></input>
          <button
            className="mobile_signup_button"
            onClick={() => this._postLogin()}
          >
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default MobileSignup;
