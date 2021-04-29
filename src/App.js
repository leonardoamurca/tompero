// import Login from "./pages/Login";
import Register from "./pages/Register";

import { Button } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import Profile from "./components/ProfileCard";
import { user } from './mocks/user'

function App() {
  return (
    <div>
      <Header>
        <Button color="secondary">Registrar</Button>
        <Button color="secondary">Entrar</Button>
      </Header>
      <Profile
        avatar={user.avatar}
        name={user.name}
        email={user.email}
        registerDate={user.registerDate}
        totalRecipes={user.totalRecipes}
      />
      <Footer />
    </div>
  );
}

export default App;
