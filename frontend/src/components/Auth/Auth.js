import React from "react";
import { AuthContainer } from "../../containers";

const Auth = ({ match }) => {
  const { kind } = match.params;
  return (
    <div>
      <AuthContainer kind={kind}></AuthContainer>
    </div>
  );
};

export default Auth;
