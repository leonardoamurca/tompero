import React from "react";
import styles from "./Footer.module.css";
import Logo from "./Logo";

import nikolas from "../assets/nikolas.png";
import leonardo from "../assets/leonardo.png";
import jonathan from "../assets/jonathan.png";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <Logo type="vertical" />
      <div className={styles.AuthorsContainer}>
        <div className={styles.Authors}>
          <img src={nikolas} alt="Nikolas" />
          <img src={leonardo} alt="Leonardo" />
          <img src={jonathan} alt="Jonathan" />
        </div>
        <p>Todos os direitos reservados | © 2021</p>
      </div>
    </div>
  );
};

export default Footer;
