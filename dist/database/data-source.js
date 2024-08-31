"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: false, // Set to false to use migrations
    logging: ["query", "error"],
    entities: [User_1.User],
    migrations: ["src/migrations/*.ts"],
});
