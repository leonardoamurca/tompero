import React, { useState } from "react";
import styles from "./Login.module.css";

import Logo from "../components/Logo";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className={styles.Container}>
      <div className={styles.LogoContainer}>
        <Logo type="vertical" />
      </div>
    </div>
  );
}

export default Login;
