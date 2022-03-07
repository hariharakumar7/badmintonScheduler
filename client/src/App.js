import React from "react";
import "./App.css";
import { Button } from "./Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
function App() {
  // const clickButton = () => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // };
  return (
    <div className="App">
      {/* <Button onClick={() => history.push("/LoginForm")}>Click button</Button> */}
      {/* <Button onClick={navigate("/login")}>Login</Button> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
