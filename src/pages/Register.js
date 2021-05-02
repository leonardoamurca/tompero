import React, { useState } from "react";
import { Input, Button, TextField } from "@material-ui/core";
import styles from "./Register.module.css";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
  });

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

        <TextField
          id="date"
          label="Data de nascimento"
          type="date"
          name="birthDate"
          onChange={onChangeField}
          value={data.birthDate}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />

        <Button variant="contained" color="primary" size="large" fullWidth>
          Cadastrar
        </Button>
      </form>
    </div>
  );
}

export default Register;
