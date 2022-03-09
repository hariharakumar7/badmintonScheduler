import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import "./Form.css";

export default function BasicTextFields({
  title,
  setPassword,
  setEmail,
  handleAction,
  sendPasswordReset,
}) {
  return (
    <div class="main">
      <div class="container">
        <div class="heading">
          <h3>{title} Form</h3>
        </div>

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Enter the Password"
            variant="outlined"
            type="password"
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
    </div>
  );
}
