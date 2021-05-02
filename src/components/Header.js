import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={styles.Container}>
      <NavLink to="/">
        <Logo type="horizontal" />
      </NavLink>
      <div>{children}</div>
    </div>
  );
};

export default Header;
