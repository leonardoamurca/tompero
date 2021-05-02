import React, { useState } from "react";
import { useAuth } from "../context/auth";
import useAsync from "../hooks/useAsync";
import { Input, Button } from "@material-ui/core";
import Loading from "../components/Loading";
import styles from "./Login.module.css";

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
        <Button
          onClick={onTryLogin}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Entrar
        </Button>
        {isLoading ? <Loading /> : null}
        {isError ? <p>{error.message}</p> : null}
      </form>
    </div>
  );
}

export default Login;
