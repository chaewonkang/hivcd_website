import React from "react";
import { Redirect } from "react-router-dom";

function withAuth(Component) {
  function WrappedComponent(props) {
    const token = localStorage.getItem("token");
    console.log(token);

    if (token === null) {
      return <Redirect to="/" />;
    }
    return <Component {...props} token={token} />;
  }

  WrappedComponent.displayName = `withAuth(${Component.name})`;

  return WrappedComponent;
}

export default withAuth;
