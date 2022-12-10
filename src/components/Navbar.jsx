import { Routes, Route } from "react-router-dom";
import heartIcon from "../icons/heartIcon.svg";
import settingsIcon from "../icons/settingsIcon.svg";
import profileIcon from "../icons/profileIcon.svg";

const Navbar = ({ user }) => {
  return user ? (
    <nav className="Navbar">
      <ul>
        <img src={profileIcon} alt="profile icon"></img>
        <img src={settingsIcon} alt="settings icon"></img>
        <img src={heartIcon} alt="heart icon"></img>
      </ul>
    </nav>
  ) : null;
};

export default Navbar;
