import React from "react";

import styles from "./Logo.module.css";

import verticalLogo from "../assets/vertical-logo.png";
import horizontalLogo from "../assets/horizontal-logo.png";

const Logo = ({ type }) => {
  function logoResolver() {
    switch (type) {
      case "horizontal":
        return <img src={horizontalLogo} alt="Tompero Logo" />;
      case "vertical":
        return <img src={verticalLogo} width="100px" alt="Tompero Logo" />;
      default:
        return null;
    }
  }

  return <div className={styles.Container}>{logoResolver()}</div>;
};

export default Logo;
