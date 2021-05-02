import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./MyRecipes.module.css";
import { recipes } from "../mocks/recipes";
import RecipeCard from "../components/RecipeCard";

function MyRecipes() {
  return (
    <div className={styles.Container}>
      <h1>Minhas Receitas</h1>
      <Button variant="contained" color="primary" size="large">
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/new-recipe"
        >
          Nova Receita
        </NavLink>
      </Button>
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
            key={recipe.id}
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
