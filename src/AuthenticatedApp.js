import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import { useAuth } from "./context/auth";

import { Button } from "@material-ui/core";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyRecipes from "./pages/MyRecipes";
import NewRecipe from "./pages/NewRecipe";
import Recipe from "./pages/Recipe";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <Router>
      <Header>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/recipes"
        >
          <Button color="secondary">Minhas Receitas</Button>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "white" }}
          to="/profile"
        >
          <Button color="secondary">Meu Perfil</Button>
        </NavLink>
        <Button color="secondary" onClick={logout}>
          Sair
        </Button>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/recipes" component={MyRecipes} />
        <Route exact path="/new-recipe" component={NewRecipe} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/login">
          <Redirect to="/" />
        </Route>
        <Route exact path="/register">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default AuthenticatedApp;
