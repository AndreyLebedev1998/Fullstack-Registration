import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import {
  register,
  getMe,
  authorization,
} from "./controllers/UsersControllers.js";

import {
  registerValidation,
  authorizationValidation,
} from "./validations/userValidation.js";

import { validationErrors } from "./utils/validationErrors.js";
import { checkAuth } from "./utils/checkAuth.js";

mongoose
  .connect(
    "mongodb+srv://andrejlebedev98:whitewolf1998@cluster0.axngspl.mongodb.net/dirAuth"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is my first server");
});

app.post("/auth/register", registerValidation, validationErrors, register);
app.get("/auth/me", checkAuth, getMe);
app.post(
  "/auth/login",
  authorizationValidation,
  validationErrors,
  authorization
);

app.listen(7000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server OK http://localhost:7000");
});
