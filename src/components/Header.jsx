import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <main className="Header">
      <ul>
        <Link to="/">
          <li>things</li>
        </Link>
        <li id="user-welcome">{user ? `hello ${user}` : null}</li>
      </ul>
    </main>
  );
};

export default Header;
