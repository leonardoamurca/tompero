import React, { useState, useEffect } from "react";
import { request } from "../utils/request";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import styles from "./MyRecipes.module.css";
import { recipes } from "../mocks/recipes";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";
import FloatingActionButton from "../components/FloatingActionButton";
import { useAuth } from "../context/auth";

function MyRecipes() {
  const { getUser } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      console.log(getUser());
    }

    fetchRecipes();
  }, []);

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
          width: "70%",
        }}
      >
        {data &&
          data.length !== 0 &&
          data.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={{
                picture:
                  "https://i0.statig.com.br/bancodeimagens/dx/gn/yo/dxgnyo752rcs4yt1jdz86v8rb.jpg",
                ...recipe,
              }}
            />
          ))}
        {loading && <Loading />}
        {recipes.length === 0 && <h1>Não há receitas cadastradas</h1>}
      </div>
    </div>
  );
}

export default MyRecipes;
