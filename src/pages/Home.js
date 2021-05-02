import React, { useState } from "react";
import styles from "./Home.module.css";
import { recipes } from "../mocks/recipes";
import RecipeCard from "../components/RecipeCard";

function Home() {
  return (
    <div className={styles.Container}>
      <h1>Receitas Recentes</h1>
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

export default Home;
