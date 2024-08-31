import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import { userRouter } from "./controllers/UserController";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => console.log("Database connection error:", error));
