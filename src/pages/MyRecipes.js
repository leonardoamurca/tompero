import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./MyRecipes.module.css";
import { recipes } from "../mocks/recipes";
import RecipeCard from "../components/RecipeCard";
import FloatingActionButton from "../components/FloatingActionButton";

function MyRecipes() {
  return (
    <div className={styles.Container}>
      <h1>Minhas Receitas</h1>
      <NavLink
        style={{ textDecoration: "none", color: "white" }}
        to="/new-recipe"
      >
        <FloatingActionButton>Criar Receita</FloatingActionButton>
      </NavLink>
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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default MyRecipes;
