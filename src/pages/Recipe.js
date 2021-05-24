import React, { useState, useEffect } from "react";
import { request } from "../utils/request";
import styles from "./Recipe.module.css";
import { recipes } from "../mocks/recipes";
import Loading from "../components/Loading";

function Recipe(props) {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      const res = await request(`recipes/${props.match.params.id}`);
      if (res) {
        const user = await request(`users/${res.user_id}`);
        setRecipe({
          author: { id: user.id, name: user.name },
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fmundo%2Fimage%2Fupload%2Fc_crop%2Cf_auto%2Cg_north_west%2Ch_3228%2Cq_auto%2Cw_6123%2Cx_0%2Cy_426%2Fv1564406376%2Flasagna_gf1zpi.jpg&f=1&nofb=1",
          ...res,
        });
      }
      setLoading(false);
    }
    fetchRecipe();
  }, []);

  {
    return (
      recipe && (
        <div className={styles.Container}>
          <img width="600px" src={recipe.image} alt={recipe.name} />
          <div className={styles.ContentContainer}>
            <div className={styles.Header}>
              <h1>{recipe.name}</h1>
              <p className={styles.Author}>
                por <a href={`#${recipe.author.id}`}>{recipe.author.name}</a>
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

          {loading && <Loading />}
          {recipe && recipe.length === 0 && (
            <h1>Não há receitas cadastradas</h1>
          )}
        </div>
      )
    );
  }
}

export default Recipe;
