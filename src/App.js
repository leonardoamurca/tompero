// import Login from "./pages/Login";
import Register from "./pages/Register";

import { Button } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import Profile from "./components/ProfileCard";
import Recipe from "./pages/Recipe";
import { user } from "./mocks/user";

function App() {
  return (
    <div>
      <Header>
        <Button color="secondary">Registrar</Button>
        <Button color="secondary">Entrar</Button>
      </Header>
      <Recipe />
      <Footer />
    </div>
  );
}

export default App;
