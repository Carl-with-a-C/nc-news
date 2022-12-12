import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, setUser, setCurrentTopic }) => {
  return user ? (
    <main className="Header">
      <button id="header-btn"></button>
      <ul>
        <Link to="/">
          <li>
            <button
              onClick={() => {
                setUser();
                setCurrentTopic();
              }}
            >
              things
            </button>
          </li>
        </Link>
        <li id="user-welcome">
          <button
            onClick={() => {
              setUser("grumpy19");
            }}
          >
            {user !== "login" ? `hello ${user}` : "login"}
          </button>
        </li>
      </ul>
    </main>
  ) : null;
};

export default Header;
