import express from "express";
import { UsersController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);
userRoutes.get("/users/:id", UsersController.getById);
userRoutes.post("/users", UsersController.create);
userRoutes.put("/users/id", UsersController.updateById)
userRoutes.delete("/users/:id", UsersController.deleteById)