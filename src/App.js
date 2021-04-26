// import Login from "./pages/Login";
import Register from "./pages/Register";

import { Button } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./mocks/recipes";

function App() {
  return (
    <div>
      <Header>
        <Button color="secondary">Registrar</Button>
        <Button color="secondary">Entrar</Button>
      </Header>
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
      <Footer />
    </div>
  );
}

export default App;
