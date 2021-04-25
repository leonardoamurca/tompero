// import Login from "./pages/Login";
import Register from "./pages/Register";
import { Button } from "@material-ui/core";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <Button color="secondary">Registrar</Button>
        <Button color="secondary">Entrar</Button>
      </Header>
    </div>
  );
}

export default App;
