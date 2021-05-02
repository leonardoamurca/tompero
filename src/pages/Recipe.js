import React from "react";
import styles from "./Recipe.module.css";
import { recipes } from "../mocks/recipes";

function Recipe(props) {
  const recipe = recipes.filter(
    (recipe) => recipe.id === props.match.params.id
  )[0];

  return (
    <div className={styles.Container}>
      <img width="600px" src={recipe.picture} alt={recipe.title} />
      <div className={styles.ContentContainer}>
        <div className={styles.Header}>
          <h1>{recipe.title}</h1>
          <p className={styles.Author}>
            por <a href="#">{recipe.author}</a>
          </p>
        </div>

        <div className={styles.Ingredients}>
          <h2>Ingredientes</h2>
          <ul>
            {recipe.ingredients.split(";").map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className={styles.Directions}>
          <h2>Modo de Preparo</h2>
          <ol>
            {recipe.directions.split(";").map((direction) => (
              <li>{direction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
