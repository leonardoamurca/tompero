import React, { useState } from "react";
import styles from "./Recipe.module.css";
import { recipes } from "../mocks/recipes";

function Recipe(props) {
  const recipeId = props.match.params.id
  
  return (
    <div className={styles.Container}>
      <img src={recipes[recipeId].picture} alt={recipes[recipeId].title} />
      <div className={styles.Header}>
        <h1>{recipes[recipeId].title}</h1>
        <p className={styles.Author}>
          por <a href="#">{recipes[recipeId].author}</a>
        </p>
      </div>

      <div className={styles.Ingredients}>
        <h2>Ingredientes</h2>
        <ul>
          {recipes[recipeId].ingredients.split(";").map((ingredient) => (
            <li>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.Directions}>
        <h2>Modo de Preparo</h2>
        <ol>
          {recipes[recipeId].directions.split(";").map((direction) => (
            <li>{direction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Recipe;
