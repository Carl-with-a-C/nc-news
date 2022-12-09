import React from "react";

const Header = ({ user }) => {
  return (
    <main className="Header">
      <ul>
        <li>
          things<li></li>
          {user ? `hello ${user}` : null}
        </li>
      </ul>
    </main>
  );
};

export default Header;
