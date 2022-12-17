import "./App.css";
import Counter from "./2022-11-27/counter_app";
import Form from "./2022-11-27/forms";
import Apicallforuser from "./2022-12-3/apicallforuser";
import TaskForm from "./2022-12-3/taskForm";
import MainForm from "./2022-12-4/Pizza/MainForm";
import TableOutput from "./2022-12-4/Pizza/TableOutput";
import FormData from "./2022-12-4/Form";
import AppRoutes from "./2022-12-11/routes";

function App() {
  // const [state, setState] = useState("");
  // const [get, getState] = useState("");
  return (
    <div className="App">
      {/* <Header text="this is header" age="age" />
      <Counter></Counter>
      <Classcomponent text="Hi i am child component" /> */}
      {/* <Counter></Counter> */}
      {/* <Form></Form> */}
      {/* <TaskForm name={state} setName={(params) => setState(params)} /> */}
      {/* <TaskForm /> */}
      {/* <FormData /> */}
      {/* <MainForm />
       */}
      {/* {<Login />} */}
      <AppRoutes />
    </div>
  );
}

export default App;
