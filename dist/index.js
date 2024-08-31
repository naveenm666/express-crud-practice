"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./database/data-source");
const UserController_1 = require("./controllers/UserController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", UserController_1.userRouter);
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
})
    .catch((error) => console.log("Database connection error:", error));
