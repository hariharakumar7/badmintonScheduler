import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import "./login.css";
import logo from "./image.png";

export default function Login({
  title,
  setPassword,
  setEmail,
  handleAction,
  sendPasswordReset,
}) {
  return (
    <div class="login">
      <h1>
        <img
          style={{ height: 100, width: 100 }}
          alt="badminton"
          src={logo}
        ></img>
      </h1>

      <Box
        component="form"
        id="box"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        // autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          sx={{ input: { color: "white" } }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          type="password"
          sx={{ input: { color: "white" } }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <div class="buttons">
        <div class="submit">
          <Button title={title} handleAction={handleAction} />
        </div>
        <div class="resetpass">
          <Button title={"Reset Password"} handleAction={sendPasswordReset} />
        </div>
      </div>
    </div>
  );
}
