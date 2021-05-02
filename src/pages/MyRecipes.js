import React, { useState } from 'react';
import styles from './MyRecipes.module.css'
import { recipes } from "../mocks/recipes";
import RecipeCard from "../components/RecipeCard";

function MyRecipes() {
  return (
   <div className={styles.Container}>
   		<h1>Minhas Receitas</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            description={recipe.description}
            picture={recipe.picture}
          />
        ))}
      </div>
   </div>
  );
}

export default MyRecipes;
