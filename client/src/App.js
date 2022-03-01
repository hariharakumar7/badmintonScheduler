import React from "react";
import "./App.css";
import { Button } from "./Button";

function App() {
  const [data, setData] = React.useState(null);
  const clickButton = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
        <Button onClick={clickButton}>Click here!!</Button>
      </header>
    </div>
  );
}

export default App;
