import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={getLinkClass}>
        Login
      </NavLink>
      <NavLink to="/register" className={getLinkClass}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
