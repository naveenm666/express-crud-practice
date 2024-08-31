import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "crud-operations-practice",
  synchronize: false, // Set to false to use migrations
  logging: ["query", "error"],
  entities: [User],
  migrations: ["src/migrations/*.ts"],
});
