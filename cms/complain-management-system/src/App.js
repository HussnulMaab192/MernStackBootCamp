import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/AppRoutes";
import { store } from "./Store/AllStates";

function App() {
  return <AppRoutes />;
}

export default App;
