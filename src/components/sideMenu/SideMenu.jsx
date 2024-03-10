import { useRef, useState } from "react";

import React from "react";
import { NavLink } from "react-router-dom";
import hiddenMenuIcon from "../../assets/images/burger-passive.png";
import activeMenuIcon from "../../assets/images/burger-active.png";

import Socials from "./Socials";

const activeMenuStyles = {
  textDecoration: "none",
  color: "rgb(37, 99, 235)",
};

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = useRef(null);

  function ToggleMenu() {
    setHiddenMenu(false);
  }

  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }

  return (
    <header className="sm:relative flex flex-col min-h-screen sm:col-span-1 md:col-span2 items-center absolute">
      <img
        className="burger-icon w-10 fixed cursor-pointer md:hidden z-50 sm:ml-2 ml-12 "
        onClick={ToggleMenu}
        src={hiddenMenu ? hiddenMenuIcon : activeMenuIcon}
        ref={ref}
        alt="Toggle Menu"
      />
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed mt-40 text-2xl gap-5 text-slate-600 hidden md:flex`}
      >
        <h1 className="sm:text-xl md:text-3xl text-center uppercase text-black font-light">
          Travel With <br></br>
          <span className="font-semibold font-namefont text-5xl">Harsha</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/"
          onClick={() => {
            RemoveMenu();
          }}
        >
          {" "}
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Contact
        </NavLink>
        <Socials />
        <p className="text-sm">
          &copy; 2022-<span>{new Date().getFullYear()}</span>
        </p>
      </nav>
    </header>
  );
};

export default SideMenu;
