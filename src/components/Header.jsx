import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return user ? (
    <main className="Header">
      <button id="header-btn"></button>
      <ul>
        <Link to="/">
          <li>things</li>
        </Link>
        <li id="user-welcome">{user ? `hello ${user}` : null}</li>
      </ul>
    </main>
  ) : null;
};

export default Header;
