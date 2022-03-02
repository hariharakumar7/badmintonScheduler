import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Home page -- Hello world!</p>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Home;
