import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Form from "./components/common/Form";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  // sendPasswordResetEmail,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./utils/firebase";
import { useState } from "react";
import Login from "./components/common/login";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authentication = getAuth();

  // const sendPasswordReset = async (email) => {
  //   try {
  //     await sendPasswordResetEmail(authentication, email);
  //     toast.info("Password reset link sent!");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React POST Request Example" }),
  };

  const addEmail = (email) => {
    requestOptions.body = JSON.stringify({ email: email });
    fetch("https://badminton-scheduler.herokuapp.com/addemail", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const handleAction = (id) => {
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          sessionStorage.setItem("User Email", response.user.email);
        })
        .catch((error) => {
          if (error.code === "auth/wrong-password") {
            toast.error("Please check the Password");
          }
          if (error.code === "auth/user-not-found") {
            toast.error("Please check the Email");
          }
        });
    } else if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
          addEmail(response.user.email);
          sessionStorage.setItem("User Email", response.user.email);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast.error("Email Already in Use");
          }
        });
    }
  };

  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route
          path="/test"
          element={
            <Login
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;
