import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

export default function Home() {
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/login");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/home");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <br />
      <br />
      Home Page
      <br />
      <br />
      <br />
      <Button handleAction={handleLogout} title={"Log out"} />
    </div>
  );
}
