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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navigate("/home");
    }

    if (!authToken) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
