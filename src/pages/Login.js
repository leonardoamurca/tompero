import React, { useState } from "react";
import { useAuth } from "../context/auth";
import useAsync from "../hooks/useAsync";
import { Input, Button } from "@material-ui/core";
import styles from "./Login.module.css";

import Logo from "../components/Logo";

function Login() {
  const { isLoading, isError, error, run } = useAsync();
  const { login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const isSubmitable = data.email && data.password;

  const onTryLogin = () => {
    if (isSubmitable) {
      run(login(data));
    }
  };

  const onChangeField = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LogoContainer}>
        <Logo type="vertical" />
      </div>
      <form className={styles.FormContainer} noValidate autoComplete="off">
        <h1>Entrar</h1>
        <Input
          name="email"
          placeholder="E-mail"
          type="email"
          value={data.email}
          onChange={onChangeField}
          fullWidth
        />
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          value={data.password}
          onChange={onChangeField}
          fullWidth
        />
        <Button onClick={onTryLogin} variant="contained" color="primary" size="large" fullWidth>
          Entrar
        </Button>
      {isLoading ? <p>Loading...</p>: null}
      {isError ? <p>{error.message}</p> : null}
      </form>
    </div>
  );
}

export default Login;
