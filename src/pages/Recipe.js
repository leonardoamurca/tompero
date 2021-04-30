import React, { useState } from "react";
import styles from "./Recipe.module.css";
import { recipes } from "../mocks/recipes";

function Recipe() {
  return (
    <div className={styles.Container}>
      <img src={recipes[0].picture} alt={recipes[0].title} />
      <div className={styles.Header}>
        <h1>{recipes[0].title}</h1>
        <p className={styles.Author}>
          por <a href="#">{recipes[0].author}</a>
        </p>
      </div>

      <div className={styles.Ingredients}>
        <h2>Ingredientes</h2>
        <ul>
          {recipes[0].ingredients.split(";").map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.Directions}>
        <h2>Modo de Preparo</h2>
        <ol>
          {recipes[0].directions.split(";").map((direction) => (
            <li>{direction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;
