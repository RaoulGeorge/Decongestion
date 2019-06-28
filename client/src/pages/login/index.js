import React from "react";
import OAuth from "../../components/oAuth";
import { withRouter } from "react-router-dom";

import "./login.scss";

function Login(props) {
  const onLoginSuccess = obj => {
    props.history.push("details", obj.profileObj);
  };
  const onLoginFailure = () => {
    console.log("failure");
  };

  return (
    <div className="Login">
      <div className="container">
        <header className="header">Decongest</header>
        <OAuth
          onLoginSuccess={onLoginSuccess}
          onLoginFailure={onLoginFailure}
        />
      </div>
    </div>
  );
}

export default withRouter(Login);
