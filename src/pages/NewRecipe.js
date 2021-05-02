import React, { useState } from "react";
import { Input, Button, TextField } from "@material-ui/core";
import styles from "./NewRecipe.module.css";

function NewRecipe() {
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    directions: "",
  });

  const onChangeField = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.Container}>
      <form className={styles.FormContainer}>
        <h1>Criar Receita</h1>
        <TextField
          id="outlined-multiline-static"
          label="Título"
          name="title"
          placeholder="Título"
          value={data.title}
          onChange={onChangeField}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="Ingredientes"
          name="ingredients"
          multiline
          value={data.ingredients}
          onChange={onChangeField}
          rows={4}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="Modo de preparo"
          multiline
          name="directions"
          value={data.directions}
          onChange={onChangeField}
          rows={4}
          variant="outlined"
          fullWidth
        />
        <div className={styles.ButtonContainer}>
          <Button
            style={{ marginRight: "25px", color: 'black' }}
            onClick={() => console.log("Ola mundo")}
            variant="contained"
            color="secondary"
            size="large"
          >
            Cancel
          </Button>
          <Button
            onClick={() => console.log("Ola mundo")}
            variant="contained"
            color="primary"
            size="large"
          >
            Criar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default NewRecipe;
