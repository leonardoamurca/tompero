import React, { useState } from "react";
import { useAuth } from "../context/auth";
import useAsync from "../hooks/useAsync";
import Loading from "../components/Loading";
import { Input, Button, TextField } from "@material-ui/core";
import styles from "./Register.module.css";

function Register() {
  const { isLoading, isError, error, run } = useAsync();
  const { register } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // TODO: Add validation to field realtime
  const isSubmitable =
    data.name &&
    data.email &&
    data.password &&
    data.password === data.confirmPassword;

  const onTryRegister = () => {
    if (isSubmitable) {
      run(register(data));
    }
  };

  const onChangeField = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.Container}>
      <form className={styles.FormContainer} noValidate autoComplete="off">
        <h1>Cadastro</h1>
        <Input
          name="name"
          placeholder="Nome completo"
          type="text"
          value={data.name}
          onChange={onChangeField}
          fullWidth
        />
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
        <Input
          name="confirmPassword"
          placeholder="Confirme sua senha"
          type="password"
          value={data.confirmPassword}
          onChange={onChangeField}
          fullWidth
        />
        <Button
          onClick={onTryRegister}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Cadastrar
        </Button>
        {isLoading ? <Loading /> : null}
        {isError ? <p style={{ color: "red" }}>{error.message}</p> : null}
      </form>
    </div>
  );
}

export default Register;
