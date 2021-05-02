import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import { Button } from "@material-ui/core";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

function UnauthenticatedApp() {
  return (
    <Router>
      <Header>
        <Button color="secondary">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/register"
          >
            Registrar
          </NavLink>
        </Button>
        <Button color="secondary">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/login"
          >
            Entrar
          </NavLink>
        </Button>
      </Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default UnauthenticatedApp;
