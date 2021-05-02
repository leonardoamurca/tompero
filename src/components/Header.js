import React from "react";
import { Button } from "@material-ui/core";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={styles.Container}>
      <div
        className={styles.LogoContainer}
        onClick={() => console.log("Go to home page")}
      >
        <Logo type="horizontal" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
