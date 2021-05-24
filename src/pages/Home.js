import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { recipes } from "../mocks/recipes";
import { request } from "../utils/request";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllRecipes() {
      setLoading(true);
      const res = await request("recipes");
      setData(res);
      setLoading(false);
    }

    fetchAllRecipes();
  }, []);

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
      </div>
    </div>
  );
}

export default Home;
