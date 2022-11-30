import './LogoutButton.css'
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  // eslint-disable-next-line
  return isAuthenticated && <button className={"logout-button " + "button"} onClick={() => logout()}>Log Out</button>;
};

export default LogoutButton;