import { useRoutes } from "react-router-dom";
import "./App.css";
import { routerTree } from "./router";

function App() {
  return <>{useRoutes(routerTree)}</>;
}

export default App;
