import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}

export default App;
