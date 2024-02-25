import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // counter is variable and setCounter is function hai jo responsible hai counter (variable) ko change(update) karne ke liye:::

  //let counter = 15;
  const addValue = () => {
    //console.log("value added", Math.random());
    //console.log("clicked", Math.random());

    console.log("clicked", counter);
    //counter = counter + 1;
    setCounter(prevcounter => prevcounter + 1);
    // setCounter(prevcounter => prevcounter + 1);
    // setCounter(prevcounter => prevcounter + 1);
    // setCounter(prevcounter => prevcounter + 1);
    
  };

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Add & Remove Value from counter value :</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
