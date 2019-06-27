import React, { ReactDOM } from "react";
import { GoogleLogin } from "react-google-login";
import google from "./../../google.svg";
import "./oAuth.scss";

function OAuth({ onLoginSuccess = () => {}, onLoginFailure = () => {} }) {
  return (
    <div className="oauth">
      <GoogleLogin
        clientId="41332632140-lni7auu5ev8f2rkusp5j0b1uururbfcn.apps.googleusercontent.com"
        buttonText="Login"
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img className="google" src={google} alt="" />
          </button>
        )}
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default OAuth;
