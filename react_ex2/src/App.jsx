import "./App.css";
import { useState } from "react";
import Form from "./Form";
import ColorChanger from "./ColorChanger";
import CCTable from "./CCTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColorChanger></ColorChanger>
      <br></br>
      <Form></Form>
      <br></br>

      <CCTable></CCTable>
    </>
  );
}

export default App;
