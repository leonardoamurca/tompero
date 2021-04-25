import React from "react";
import { Button } from "@material-ui/core";
import Logo from "./Logo";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={styles.Container}>
      <Logo type="horizontal" />
      <div className={styles.ButtonGroup}>{children}</div>
    </div>
  );
};

export default Header;
