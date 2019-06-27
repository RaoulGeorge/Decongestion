import React, { ReactDOM } from "react";
import { GoogleLogin } from "react-google-login";

function OAuth({ onLoginSuccess = () => {}, onLoginFailure = () => {} }) {
  return (
    <div className="oauth">
      <GoogleLogin
        clientId="41332632140-lni7auu5ev8f2rkusp5j0b1uururbfcn.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default OAuth;
