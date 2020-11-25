import React from "react";
import AuthContainer from "../containers/AuthContainer/AuthContainer";

const Auth = ({ match }) => {
  // App.js /:kind로 설정해 둔 값
  const { kind } = match.params;
  return (
    <div>
      <AuthContainer kind={kind} />
    </div>
  );
};

export default Auth;
