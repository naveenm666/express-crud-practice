import { Router } from "express";
import { User } from "../entities/User";
import { AppDataSource } from "../database/data-source";

const userRouter = Router();

// Create a user
userRouter.post("/", async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    await userRepository.save(newUser);
    console.log("User created:", newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Read all users
userRouter.get("/", async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    console.log("\t\n\n\n\n\n",userRepository,"\t\n\n\n\n\n")
    const users = await userRepository.find();
    console.log("\t\n\n\n\n\n",users,"\t\n\n\n\n\n\n")
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Read a user by ID
userRouter.get("/:id", async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a user
userRouter.put("/:id", async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (user) {
      userRepository.merge(user, req.body);
      await userRepository.save(user);
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a user
userRouter.delete("/:id", async (req, res) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const result = await userRepository.delete(parseInt(req.params.id));
    if (result.affected) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { userRouter };
